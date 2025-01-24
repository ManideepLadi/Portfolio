import { useEffect, useState } from 'react';
import srinidhiImage from '../assets/Srinidhi.png';

function Home() {
  const [words, setWords] = useState(['Hi,', "I'm", 'Srinidhi']);
  const [visibleWords, setVisibleWords] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [titleLanded, setTitleLanded] = useState(false);

  useEffect(() => {
    // Start animation with minimal delay
    setTimeout(() => {
      setShowTitle(true);
      
      // Reduce waiting time for landing
      setTimeout(() => {
        setTitleLanded(true);
        // Start word animations sooner and closer together
        words.forEach((word, index) => {
          setTimeout(() => {
            setVisibleWords(prev => [...prev, word]);
          }, 50 + (index * 100)); // Even faster word animations
        });
      }, 400); // Reduced from 600 to 400
    }, 100); // Reduced from 200 to 100
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-content">
          <div className={`title-wrapper ${showTitle ? 'show' : ''} ${titleLanded ? 'landed' : ''}`}>
            <h2 className="animated-title">
              {words.map((word, index) => (
                <span 
                  key={index} 
                  className={`word ${visibleWords.includes(word) ? 'visible' : ''}`}
                >
                  {word}{' '}
                </span>
              ))}
            </h2>
          </div>
          <p className="description">
            A passionate software developer specializing in full-stack development and creating engaging user experiences.
          </p>
          <a 
            href="https://topmate.io/srinidhi_chintala" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="connect-button"
          >
            Connect with Me
          </a>
        </div>
        <div className="profile-image-container">
          <div className="profile-image">
            <img src={srinidhiImage} alt="Srinidhi" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 