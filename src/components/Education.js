import React, { Fragment } from 'react';

const Education = () => {
  return (
    <Fragment>
      <div class='container'>
        <div class='grid-2'>
          <div className='section-title'>
            <h1>Education</h1>
          </div>
          <div class='information'>
            <div>
              <h1>INTI International College Subang</h1>
              <h2>Bachelor of Science in Computer Science · December 2023</h2>
              <h3>
                <ul>
                  <li>
                    Chosen to attend the prestigious LATAM Impact Program in
                    2019 which selects only 10 individuals from the world's top
                    schools.
                  </li>
                  <li>Cumulative GPA: 3.94/4.00</li>
                  <li>Dean's List: Spring 2019, Fall 2019</li>
                  <li>President's List: Spring 2020</li>
                </ul>
              </h3>
            </div>
            <div>
              <h1>Wesley Methodist School Kuala Lumpur </h1>
              <h2>
                CGPA: 4.00/4.00; IGCSE: 10A*s; SPM: 1A+, 1A, 1B+ · November 2018
              </h2>
              <h3>
                <ul>
                  <li>Scholar of the Year – Valedictorian </li>
                  <li>
                    Outstanding Cambridge Learners Award (Additional
                    Mathematics)
                  </li>
                  <li>Honor Roll Student (2014 - 2018)</li>
                  <li>
                    Outstanding Award for Hua Lo Geng Mathematics Competition
                  </li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class='border'></div>
    </Fragment>
  );
};

export default Education;
