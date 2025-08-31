
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoScrollInterval?: number;
}

const ImageCarousel = ({ images, autoScrollInterval = 4000 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isModalOpen && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoScrollInterval);

      return () => clearInterval(interval);
    }
  }, [images.length, autoScrollInterval, isModalOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const openModal = (image: CarouselImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden rounded-xl shadow-lg flex items-center justify-center bg-black">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[400px] md:h-[520px] flex-shrink-0 relative flex items-center justify-center cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* REMOVED black overlay for side bars */}
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain m-auto transition-transform duration-300 relative z-10"
                style={{
                  display: 'block',
                  margin: 'auto',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 z-20">
                <p className="text-white text-sm font-medium text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="group absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all z-20 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7 text-gray-900 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="group absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all z-20 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7 text-gray-900 group-hover:scale-110 transition-transform" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-medium text-center">{selectedImage.caption}</p>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
              aria-label="Close modal"
            >
              <span className="text-white text-xl font-bold">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
