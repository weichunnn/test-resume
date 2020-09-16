import React from 'react';
import PropTypes from 'prop-types';

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

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired
};

ProgressBar.defaultProps = {
  title: 'Default',
  percentage: '50%'
};

export default ProgressBar;
