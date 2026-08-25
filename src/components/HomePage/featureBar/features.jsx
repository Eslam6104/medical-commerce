import { BiSolidOffer } from "react-icons/bi";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

export const features = [
  {
    icon: <FaShippingFast fontSize="45px" />,
    title: "Worldwide Shipping",
    subtitle: "For all Orders Over $100",
  },
  {
    icon: <FaMoneyCheckAlt fontSize="45px" />,
    title: "Money Back Guarantee",
    subtitle: "Guarantee Within 30 Days",
  },
  {
    icon: <BiSolidOffer fontSize="45px" />,
    title: "Offers And Discounts",
    subtitle: "100% Member Discount",
  },
  {
    icon: <AiTwotoneCustomerService fontSize="45px" />,
    title: "24/7 Support Services",
    subtitle: "Contact us Anytime",
  },
];