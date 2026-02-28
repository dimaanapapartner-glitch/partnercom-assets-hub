import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { TrustNumbers } from "@/components/TrustNumbers";
import { FeaturedAssets } from "@/components/FeaturedAssets";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";

const Index = () => (
  <Layout>
    <Hero />
    <TrustNumbers />
    <FeaturedAssets />
    <ProcessSteps />
    <ContactForm />
  </Layout>
);

export default Index;
