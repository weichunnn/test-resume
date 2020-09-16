import React from 'react';

const ProgressBar = ({ title, percentage }) => {
  return (
    <div className='progress-container'>
      <h2>{title}</h2>
      <div className='progress'>
        <div className='bar' style={{ width: percentage }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
