import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 150, delay = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex += 1;
        } else {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return { displayedText, isTypingComplete };
};

export default useTypewriter;