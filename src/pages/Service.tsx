import React from "react";
import { Box } from "@mui/material";

// Section components
import HeroSection from "../components/organisms/HeroSection";
import SkillTable from "../components/organisms/SkillTable";
import PortfolioShowcase from "../components/organisms/PortfolioShowcase";
import MetricsBanner from "../components/organisms/MetricsBanner";
import FAQSection from "../components/organisms/FAQSection";
import CallToAction from "../components/organisms/CallToAction";
import ContactSection from "../components/organisms/ContactSection";

const Service: React.FC = () => {
  return (
    <Box sx={{ pt: "120px" }}>
      <HeroSection />
      <SkillTable />
      <PortfolioShowcase />
      <MetricsBanner />
      <FAQSection />
      <CallToAction />
      <ContactSection />
    </Box>
  );
};

export default Service;