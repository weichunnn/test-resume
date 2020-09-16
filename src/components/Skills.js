import React from 'react';
import ProgressBar from '../items/ProgressBar';

const Skills = () => {
  return (
    <div class='container'>
      <div className='grid-2'>
        <div className='section-title'>
          <h1>Skills</h1>
        </div>
        <div>
          <ProgressBar title={'HTML5'} percentage={'75%'} />
          <ProgressBar title={'CSS3'} percentage={'75%'} />
          <ProgressBar title={'ReactJS'} percentage={'87.5%'} />
          <ProgressBar title={'NodeJS'} percentage={'60%'} />
          <ProgressBar title={'ExpressJS'} percentage={'70%'} />
          <ProgressBar title={'Vue'} percentage={'20%'} />
          <ProgressBar title={'Git'} percentage={'50%'} />
          <ProgressBar title={'Python'} percentage={'75%'} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
