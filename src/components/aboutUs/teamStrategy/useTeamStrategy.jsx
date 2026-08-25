import { useState, useMemo } from "react";
import teamData from "./teamData";

const useTeamStrategy = () => {
  const [index, setIndex] = useState(0);
  const sections = Array.isArray(teamData) ? teamData : [];
  const hasSections = sections.length > 0;
  const error = hasSections ? "" : "No team sections available.";
  const activeSection = hasSections ? sections[index] : null;
  const body = activeSection?.body || [];
  const emptyContent = useMemo(
    () => !Array.isArray(body) || body.every((text) => !text || !text.trim()),
    [body]
  );
  return {
    sections,
    activeSection,
    error,
    emptyContent,
    index,
    setIndex,
  };
};
export default useTeamStrategy;
