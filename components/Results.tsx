"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Results() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track selected image for full-screen modal

  const imagesPerSlide = 3; // Number of images per slide

  const results = [
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_1.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_2.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_3.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_4.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_5.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_6.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_7.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_8.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_9.jpg", description: "Before and After" },
    { beforeAfter: "https://castro.atract.net/elements/img/results/result_10.jpg", description: "Before and After" }
  ];

  const totalSlides = Math.ceil(results.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get the current set of images based on the slide index
  const currentImages = results.slice(currentSlide * imagesPerSlide, (currentSlide * imagesPerSlide) + imagesPerSlide);

  // Close the full-screen image modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal when clicking on the backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="results" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Before and After Results</h2>
        <div className="relative">
          <div className="flex justify-center items-center gap-4">
            {currentImages.map((result, index) => (
              <div key={index} className="w-1/3 h-[500px] cursor-pointer" onClick={() => setSelectedImage(result.beforeAfter)}>
                <img 
                  src={result.beforeAfter} 
                  alt="beforeAfter" 
                  className="w-full h-full object-cover"
                />
                <p className="text-center mt-4">{result.description}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="outline" className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleBackdropClick}  // Detect click on backdrop
          >
            <div className="relative">
              <Button variant="ghost" className="absolute top-2 right-2 text-white" onClick={closeModal}>
                <X className="h-8 w-8" />
              </Button>
              <img src={selectedImage} alt="Selected Fullscreen" className="max-w-full max-h-screen object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
