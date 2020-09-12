import { useEffect } from 'react';
import getData from './index';

const useGetData = ({ setResponseData, year, launch, landing }) => {
  let queryParam = '';
  if (typeof window !== 'undefined') {
    var queryParams = new URLSearchParams(window.location.search);
    if (year) {
      queryParams.set('launch_year', year);
      queryParam += `&launch_year=${year}`;
    }
    if (launch) {
      queryParams.set('launch_success', launch);
      queryParam += `&launch_success=${launch}`;
    }
    if (landing) {
      queryParams.set('land_success', landing);
      queryParam += `&land_success=${landing}`;
    }

    window.history.replaceState(null, null, '?' + queryParams.toString());
  }
  useEffect(() => {
    async function fetchData() {
      const data = await getData({
        queryParam,
      });
      setResponseData(data);
    }
    fetchData();
  }, [landing, launch, queryParam, setResponseData, year]);
};

export default useGetData;
