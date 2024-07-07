import React, { useEffect, useState } from 'react';

const withFadeIn = (WrappedComponent) => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeIn;
