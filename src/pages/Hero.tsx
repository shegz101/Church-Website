import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ChoirImg from "../assets/choir.jpg";
import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import TypeWriter from "../utils/TypeWriter";

const images = [ChoirImg, Image1, Image2];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to go to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Auto transition with zoom-out effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Image Container */}
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-transform duration-1000 ${
              index === currentIndex
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Text with Typewriter Effect */}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-40">
        <TypeWriter
          texts={[
            "Welcome to C.A.C Oke-Igbala, Magboro",
            "May the good Lord bless you!",
            "One Fold, One Shepherd",
          ]}
          typingSpeed={120} // Optional
          pauseDuration={1500} // Optional
          styling="text-white font-bold text-xl md:text-4xl"
        />
      </div>

      {/* Left Arrow (Hidden on first image) */}
      {currentIndex > 0 && (
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
          onClick={prevImage}
        >
          <FaArrowLeft size={24} />
        </button>
      )}

      {/* Right Arrow (Hidden on last image) */}
      {currentIndex < images.length - 1 && (
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
          onClick={nextImage}
        >
          <FaArrowRight size={24} />
        </button>
      )}
    </div>
  );
};

export default Hero;
