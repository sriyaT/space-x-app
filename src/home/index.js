import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import Card from '../card';
import Filters from '../filters';
import useGetData from '../utils/useGetData';

const Home = () => {
  let [responseData, setResponseData] = useState('');

  useGetData({
    setResponseData,
  });

  const noData = isEmpty(responseData) ? 'noData' : '';

  return (
    <div className='home-container'>
      <h1>SpaceX Launch Programs</h1>
      <div className='home'>
        <div className='filter-area'>
          <Filters setResponseData={setResponseData} />
        </div>
        <div className={`card-container ${noData}`}>
          {!isEmpty(responseData)
            ? responseData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    image={item.mission_patch}
                    flightNumber={item.flight_number}
                    missionName={item.mission_name}
                    missionId={item.mission_id}
                    launchYear={item.launch_year}
                    successfulLaunchYear={item?.launch_success?.toString()}
                    successfulLanding={item.landing_success?.toString()}
                  />
                );
              })
            : 'Nothing is found'}
        </div>
      </div>
      <span>Developed By : Sriya</span>
    </div>
  );
};

export default Home;
