import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const subscriptionSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export function useSubscriptionForm() {
  const { register, handleSubmit, reset, watch, control, formState } = useForm({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: { email: "", agree: false },
  });

  const handleValidSubmit = handleSubmit(() =>
    reset({ email: "", agree: false })
  );

  const isAgreementChecked = watch("agree");

  return {
    control,
    register,
    formState,
    handleValidSubmit,
    isAgreementChecked,
  };
}
