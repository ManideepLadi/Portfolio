import { useEffect, useState } from 'react';
import srinidhiImage from '../assets/Srinidhi.png';
import '../styles/Home.css';

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

  const scrollToResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          I’m a passionate software engineer who loves learning concepts in a relatable way. As the Storyteller at TechStoriesOfSrinidhi, I create content on DSA, system design, and all things tech, breaking down complex concepts with fun, real-life analogies. Why? Because tech is exciting, and learning it should be too!
          </p>
          <a 
            href="https://topmate.io/srinidhi_chintala" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="connect-button"
          >
            Connect 1:1
          </a>
          <div className="social-links">
            <a href="https://www.youtube.com/@srinidhichintala" className="social-link youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/srinidhi-chintala" className="social-link linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/srinidhichintala" className="social-link instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <div className="channel-links">
            <a href="https://t.me/your_channel" className="channel-link telegram">
              <i className="fab fa-telegram"></i>
              Join Telegram Channel
            </a>
            <a href="https://whatsapp.com/channel/your_channel" className="channel-link whatsapp">
              <i className="fab fa-whatsapp"></i>
              Join WhatsApp Channel
            </a>
          </div>
        </div>
        <div className="profile-image-container">
          <div className="profile-image">
            <img src={srinidhiImage} alt="Srinidhi" />
          </div>
        </div>
      </div>
      <div className="scroll-down" onClick={scrollToResume}>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </section>
  );
}

export default Home; 