import axios from 'axios';

const getData = async ({ queryParam }) =>
  axios
    .get(`https://api.spacexdata.com/v3/launches?limit=100${queryParam}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export default getData;
