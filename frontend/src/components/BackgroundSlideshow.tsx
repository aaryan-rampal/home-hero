import React, { useEffect, useState } from 'react';

interface BackgroundSlideshowProps {
  images: string[];
  opacity?: number; // 0 to 1
  interval?: number; // ms
// To control aspect ratio, wrap this component in a parent div with a Tailwind aspect-* class.
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({ images, opacity = 0.5, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="slideshow background"
          className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000`}
          style={{ opacity: idx === current ? opacity : 0, transition: 'opacity 1s' }}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
