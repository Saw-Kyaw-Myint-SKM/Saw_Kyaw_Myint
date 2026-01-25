import React, { useState, useEffect } from "react";
import { CodeBackground } from "./component/CodeBackground";
import { LoadingScreen } from "./component/Loading";
import { BackToTopButton } from "./component/BackToTopButton";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
} from "framer-motion";
import { CertificationModal } from "./component/Modal/CertificationModal";
import { HomeSection } from "./component/section/HomeSection";
import { Navigation } from "./component/partials/Navigation";
import { About } from "./component/Section/About";
import { Projects } from "./component/Section/Projects";
import { Certifications } from "./component/Section/Certifications";
import { Contact } from "./component/Section/Contact";
import { Footer } from "./component/Section/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCertification, setSelectedCertification] = useState(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const closeModal = () => {
    setSelectedCertification(null);
  };

  const handleCertificationClick = (cert) => {
    setSelectedCertification(cert);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        <CodeBackground />
        {/* Navigation */}
        <Navigation />
        {/* Home Section */}
        <HomeSection />
        {/* About Section */}
        <About />
        {/* Projects Section */}
        <Projects />
        {/* Certifications Section */}
        <Certifications certificationClick={handleCertificationClick} />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        {/* <Footer /> */}
        {/* Back to Top Button */}
        <BackToTopButton />
        <CertificationModal
          isOpen={!!selectedCertification}
          onClose={closeModal}
          certification={selectedCertification}
        />
      </AnimatePresence>
    </div>
  );
}
