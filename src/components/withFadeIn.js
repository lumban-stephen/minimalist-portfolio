import React, { useEffect, useState, useRef } from 'react';

const withFadeIn = (WrappedComponent) => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.1 } // Adjust the threshold as needed
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeIn;
