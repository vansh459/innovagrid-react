import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import InternshipModal from "@/components/InternshipModal";

const Index = () => {
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  const handleInternshipClick = () => {
    setIsInternshipModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsInternshipModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header onInternshipClick={handleInternshipClick} />

      {/* Main Content */}
      <main>
        <Hero onInternshipClick={handleInternshipClick} />
        <Services />
        <Mission />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Internship Modal */}
      <InternshipModal 
        isOpen={isInternshipModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Index;