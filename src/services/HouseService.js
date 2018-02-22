import axios from 'axios';

export default{
  data() {
    return {
    };
  },
  getHouses() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses');
    return promise;
  },
};