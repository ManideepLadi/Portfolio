import '../styles/Resume.css';
import Timeline from './Timeline';
import resumePDF from '../assets/resume.pdf';
import { useEffect, useRef } from 'react';

function Resume() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="resume" ref={sectionRef}>
      <div className="resume-header">
        <h3>Work Experience And Education Timeline View</h3>
        <a 
          href={resumePDF} 
          download="Srinidhi_Resume.pdf"
          className="download-button"
        >
          Download Resume
        </a>
      </div>
      <Timeline />
    </section>
  );
}

export default Resume;