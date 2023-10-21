import { useEffect, useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://i.ibb.co/mGkTt8q/24850233-social-media-banner-super-promotion-up-to-50-off.jpg',
    'https://i.ibb.co/9W7BTjG/34415764-422.jpg',
    'https://i.ibb.co/8BvZ8LS/16136135-5691822.jpg',
    'https://i.ibb.co/JHrkYHr/20113928-BLACK-FRIDAY-COUPON-Mesa-de-trabajo-1.jpg',
    'https://i.ibb.co/0rBstW9/23959141-hubij8.jpg',
    'https://i.ibb.co/dGs8TWT/23957526-9.jpg',
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
