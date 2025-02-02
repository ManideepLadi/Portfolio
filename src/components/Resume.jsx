import Timeline from './Timeline';
import resumePDF from '../assets/resume.pdf'; // Make sure to add your resume PDF

function Resume() {
  return (
    <section id="resume">
      <div className="resume-header">
        <h2>Work Experience & Education</h2>
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