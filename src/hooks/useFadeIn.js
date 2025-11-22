import { useState, useEffect, useRef } from 'react';

export const useFadeIn = (threshold = 0.1) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, [threshold]);

  return [domRef, isVisible];
};
