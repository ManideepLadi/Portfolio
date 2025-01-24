import { useState, useEffect } from 'react';

function Logo() {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const keys = ['T', 'S1', 'S2'];
    let currentIndex = 0;

    const animateKeys = () => {
      setPressedKey(keys[currentIndex]);
      
      // Reset the current key after animation
      setTimeout(() => {
        setPressedKey(null);
      }, 150);

      // Move to next key
      currentIndex = (currentIndex + 1) % keys.length;
    };

    // Start the animation loop
    const intervalId = setInterval(() => {
      animateKeys();
    }, 500); // Total time between each key animation

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="logo-container">
      <span className={`key-button ${pressedKey === 'T' ? 'pressed' : ''}`}>
        T
      </span>
      <span className={`key-button ${pressedKey === 'S1' ? 'pressed' : ''}`}>
        S
      </span>
      <span className={`key-button ${pressedKey === 'S2' ? 'pressed' : ''}`}>
        S
      </span>
    </div>
  );
}

export default Logo; 