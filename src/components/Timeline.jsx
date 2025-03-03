import React, { useEffect, useRef, useState } from 'react';
// import marioKart from '../assets/mario-kart.png';
import marioKart from '../assets/Mario-kart1.png';
import '../styles/Timeline.css'; 

function Timeline() {
  const vehicleRef = useRef(null);
  const timelineRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const vehicle = vehicleRef.current;
    const timeline = timelineRef.current;

    if (!vehicle || !timeline) return;

    let timelineItems = document.querySelectorAll('.timeline-item');
    let positions = [];
    let currentIndex = 0;
    let isAnimating = false;

    const calculatePositions = () => {
      positions = Array.from(timelineItems).map((item, index) => {
        const rect = item.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        return {
          index,
          top: rect.top + window.scrollY,
          center: rect.top + (rect.height / 2) - timelineRect.top
        };
      });
    };

    const moveVehicle = (position) => {
      if (!isAnimating) {
        isAnimating = true;
        vehicle.classList.add('moving');
        vehicle.style.top = `${position}px`;
        
        setTimeout(() => {
          isAnimating = false;
          vehicle.classList.remove('moving');
        }, 500); // Match this with your transition duration
      }
    };

    const handleScroll = () => {
      if (isAnimating) return;

      const scrollPosition = window.scrollY;
      const viewportMiddle = scrollPosition+(window.innerHeight/8);
      
      // Find the nearest timeline item
      let nearestItem = null;
      let minDistance = Infinity;

      positions.forEach((pos) => {
        const distance = Math.abs(viewportMiddle - pos.top);
        if (distance < minDistance) {
          minDistance = distance;
          nearestItem = pos;
        }
      });

      if (nearestItem && currentIndex !== nearestItem.index) {
        currentIndex = nearestItem.index;
        moveVehicle(nearestItem.center);
      }
    };

    const throttledScroll = () => {
      if (!window.scrollTimeout) {
        window.scrollTimeout = setTimeout(() => {
          handleScroll();
          window.scrollTimeout = null;
        }, 50);
      }
    };

    calculatePositions();
    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('resize', calculatePositions);

    // Set initial position
    const firstItem = positions[0];
    if (firstItem) {
      vehicle.style.top = `${firstItem.center}px`;
      vehicle.style.opacity = '1';
    }

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', calculatePositions);
      clearTimeout(window.scrollTimeout);
    };
  }, [isScrolling]);

  return (
    <div className="timeline" ref={timelineRef}>
      <img 
        src={marioKart}
        className="mario-vehicle" 
        ref={vehicleRef} 
        alt="Mario Kart"
        style={{
          position: 'absolute',
          left: 'calc(50% - 55px)',
          width: '110px',
          height: '110px',
          zIndex: 1000,
          //transition: 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transition: 'top 0.9s linear',
          opacity: 1,
          filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1))'
        }}
      />
      {/* Experience Section */}
      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>SDE</h3>
            <span className="year">2024-Present</span>
          </div>
          <h4>Microsoft · Hyderabad</h4>
          <p>OneDrive and SharePoint MeTA Team</p>
          <ul>
            <li>Contributed to media extraction, transformation, and analysis microservice on Azure</li>
            <li>Integrated PlainTextParser and DocParser for Copilot requirements</li>
            <li>Migrated Service Buses to premium tier across regions</li>
            <li>Received Ninja Award within three months</li>
            <li>Optimized API performance and enhanced security with regional Key Vaults</li>
            <li>Developed Grafana dashboards for metrics monitoring</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>SDE II</h3>
            <span className="year">2023-2024</span>
          </div>
          <h4>Sandvine · Bengaluru</h4>
          <p>Key Achievements:</p>
          <ul>
            <li>Led GRE traffic parsing feature implementation</li>
            <li>Optimized NIC performance with RSS flow rules</li>
            <li>Implemented SSL handshake RTT measurements</li>
            <li>Built Maestro Security Engine in Go</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>SDE</h3>
            <span className="year">2022-2023</span>
          </div>
          <h4>Sandvine · Bengaluru</h4>
          <ul>
            <li>Developed licensed validation tools</li>
            <li>Implemented dynamic traffic shaping feature in C++</li>
            <li>Created firmware installation features using NETCONF</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>BTech</h3>
            <span className="year">2019-2023</span>
          </div>
          <h4>Institute of Aeronautical Engineering</h4>
          <p>Grade: 9.26 CGPA</p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>Intermediate(MPC)</h3>
            <span className="year">2017-2019</span>
          </div>
          <h4>Narayana Junior College, Bachupally</h4>
          <p>Grade: 97.6%</p>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>10th Class</h3>
            <span className="year">2016-2017</span>
          </div>
          <h4>Narayana Concept School, Kukatpally</h4>
          <p>Grade: 10 GPA</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline; 