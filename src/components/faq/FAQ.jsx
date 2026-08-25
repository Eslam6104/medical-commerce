import React from "react";
import HeaderOfSection from "../customHook/HeaderOfSection";
import FAQSection from "./FAQSection";
import ServiceSection from "../aboutUs/services/ServiceSection";
import AccordionSection from "./AccordionSection";

const FAQ = () => {
  return (
    <>
      <HeaderOfSection
        title=" FAQ"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Element", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      <ServiceSection />
      <AccordionSection />
    </>
  );
};

export default FAQ;
