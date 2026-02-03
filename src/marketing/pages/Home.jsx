import HeroSection from "../components/HeroSection";
import FeatureRow from "../components/FeatureRow";
import FeatureGrid from "../components/FeatureGrid";
import AISection from "../components/AISection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingPreview from "../components/PricingPreview";
import DashboardShowcase from "../components/DashboardShowcase";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Feature Pillar 1: Knowledge Management (Left) */}
      <FeatureRow
        badge="Centralized Knowledge"
        title="Your Single Source of Truth"
        description="Stop searching through scattered messages, emails, and cloud drives. Organize all your SOPs, product guides, and technical docs in one structured, searchable portal."
        bullets={[
          "Drag-and-drop category management",
          "Advanced version control & rollback",
          "Internal & External visibility controls"
        ]}
        align="left"
      />

      {/* Dashboard Screenshots Showcase */}
      <DashboardShowcase />

      {/* Feature Pillar 2: AI (Specialized Section) */}
      <AISection />

      {/* Feature Pillar 3: Grid (Security/Scale) */}
      <FeatureGrid />

      {/* Social Proof & Metrics */}
      <TestimonialsSection />

      {/* Pricing & Final CTA */}
      <PricingPreview />
    </>
  );
}
