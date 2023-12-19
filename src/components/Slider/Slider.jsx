import { useEffect, useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://iili.io/JAC4VkX.jpg',
    'https://iili.io/JAC6ByX.jpg',
    'https://iili.io/JAC65aS.jpg',
    'https://iili.io/JAC60Zb.jpg',
    'https://iili.io/JAC6SPR.jpg',
    'https://iili.io/JAC6mKl.jpg',
  ];

  useEffect(() => {
    const moveNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const interval = setInterval(moveNext, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero w-full pt-6 pb-24 overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className={`hero-item relative w-full ${
            currentSlide === index ? 'translate-x-0' : currentSlide === (index - 1 + slides.length) % slides.length ? 'translate-x-full' : '-translate-x-full'
          } transition-transform duration-500 ease-in-out`}
        >
          <img src={src} className="w-full h-96 sm:h-auto object-cover" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
