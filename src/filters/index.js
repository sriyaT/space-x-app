import React from 'react';
import Filter from '../filter';

const Filters = ({ setResponseData }) => {
  return (
    <div className='filter-container'>
      <h2>Filters</h2>
      <div className='sections'>
        <Filter setResponseData={setResponseData} />
      </div>
    </div>
  );
};

export default Filters;
