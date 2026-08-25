import { useState, useEffect } from "react";
import opportunitiesData from "./opportunitiesData";

const useOpportunitiesData=()=> {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      setData(opportunitiesData);
    } catch {
      setError("Failed to load data.");
    }
  }, []);
  return { data, error };
}
export default useOpportunitiesData;