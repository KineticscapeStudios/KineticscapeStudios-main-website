import React from 'react';
import "./PipeLine.css";
const PipeLine = () => {

  const steps = [
    { number: '01', title: 'INITIAL CONSULTATION', description: 'Understand your vision and goals' },
    { number: '02', title: 'PROPOSAL AND AGREEMENT', description: 'Outline project scope, timeline, and budget' },
    { number: '03', title: 'CONCEPT DEVELOPMENT', description: 'Create initial designs and prototypes' },
    { number: '04', title: 'DESIGN AND PRODUCTION', description: 'Refine and execute the chosen concept' },
    { number: '05', title: 'FEEDBACK LOOP', description: 'Gather input and make necessary adjustments' },
    { number: '06', title: 'FINAL DELIVERY', description: 'Present the completed project' },
    { number: '07', title: 'POST PROJECT SUPPORT', description: 'Provide ongoing assistance and maintenance' },
  ];

  return (
    <div className="pipeline-background">
    <div className="pipeline-container">
      <div className="pipeline-title">
        <span>How We Bring Ideas to Life</span>
        </div>
      <div className="pipeline">
        {steps.map((step, index) => (
          <div key={index} className="pipeline-step">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h1 className="step-title">{step.title}</h1>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PipeLine;
