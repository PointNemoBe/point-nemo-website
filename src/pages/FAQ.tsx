
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExcursionFAQ } from "@/components/excursions/ExcursionFAQ";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-display font-bold text-center mb-8 text-nemo-forest">
            Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Retrouvez ici les réponses aux questions les plus fréquemment posées sur nos excursions et nos services.
          </p>
          <ExcursionFAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
