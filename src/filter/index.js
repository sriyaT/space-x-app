import React, { useState } from 'react';
import filterData from './filterData';
import useGetData from '../utils/useGetData';

const Filter = ({ setResponseData }) => {
  const [year, setYear] = useState('');
  const [launch, setLaunch] = useState('');
  const [landing, setLanding] = useState('');

  useGetData({
    setResponseData,
    year,
    launch,
    landing,
  });

  return (
    <div className='filter'>
      {filterData
        ? Object.keys(filterData).map((item, index) => {
            return (
              <div className='filter-option' key={index}>
                <h4>{filterData[item].title}</h4>
                <div className='options'>
                  {filterData[item].option.map((oItem, index) => {
                    const value =
                      item === 'launchYear'
                        ? year
                        : item === 'successfulLaunch'
                        ? launch
                        : landing;
                    return (
                      <div
                        key={index}
                        className='option'
                        onClick={() => {
                          if (item === 'launchYear') {
                            setYear((prevItem) =>
                              prevItem === oItem ? '' : oItem
                            );
                          } else if (item === 'successfulLaunch') {
                            setLaunch((prevItem) =>
                              prevItem === oItem ? '' : oItem
                            );
                          } else if (item === 'successfulLanding') {
                            setLanding((prevItem) =>
                              prevItem === oItem ? '' : oItem
                            );
                          }
                        }}
                      >
                        <h3 className={oItem === value ? 'selected' : ''}>
                          {oItem}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Filter;
