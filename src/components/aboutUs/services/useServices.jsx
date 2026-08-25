import { useEffect, useState } from "react";
import { servicesData } from "./ServiceData";

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (!Array.isArray(servicesData) || !servicesData.length) {
        throw new Error("No services available.");
      }
      setServices(servicesData);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error.");
    }
  }, []);

  return { services, error };
};
