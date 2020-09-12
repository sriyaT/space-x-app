import React from 'react';
import isEmpty from 'lodash/isEmpty';

const Card = ({
  missionName,
  flightNumber,
  missionId,
  launchYear,
  successfulLaunchYear,
  successfulLanding,
}) => {
  return (
    <div className='card'>
      <div className='image-container'>
        <img
          src={
            'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo'
          }
          alt='image1'
        />
      </div>
      <div className='card-info'>
        <h2>
          {missionName} #{flightNumber}
        </h2>
        {!isEmpty(missionId) && (
          <h6>
            <span>Mission Id:&nbsp;</span>
            <ul>
              {missionId.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </h6>
        )}
        <h6>
          <span>Launch Year:&nbsp;</span>
          {launchYear}
        </h6>
        <h6>
          <span>Successful Launch:&nbsp;</span>
          {successfulLaunchYear}
        </h6>
        <h6>
          <span>Successful Landing:&nbsp;</span>
          {successfulLanding}
        </h6>
      </div>
    </div>
  );
};

export default Card;
