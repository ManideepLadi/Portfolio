import React from 'react';

function Timeline() {
  return (
    <div className="timeline">
      {/* Experience Section */}
      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>Software Engineer</h3>
            <span className="year">2024 - Present</span>
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
            <h3>Software Engineer II</h3>
            <span className="year">2023 - 2024</span>
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
            <h3>Software Engineer</h3>
            <span className="year">2022 - 2023</span>
          </div>
          <h4>Sandvine · Bengaluru</h4>
          <ul>
            <li>Developed licensing validation tools</li>
            <li>Implemented dynamic traffic shaping feature in C++</li>
            <li>Created firmware installation features using NETCONF</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>Bachelor of Technology</h3>
            <span className="year">2019 - 2023</span>
          </div>
          <h4>Institute of Aeronautical Engineering</h4>
          <p>Grade: 9.26 CGPA</p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>Intermediate Education (MPC)</h3>
            <span className="year">2017 - 2019</span>
          </div>
          <h4>Narayana Junior College, Bachupally</h4>
          <p>Grade: 97.6%</p>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-header">
            <h3>Secondary School Certificate</h3>
            <span className="year">2016 - 2017</span>
          </div>
          <h4>Narayana Concept School, Kukatpally</h4>
          <p>Grade: 10 GPA</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline; 