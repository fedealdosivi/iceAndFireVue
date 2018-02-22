import axios from 'axios';

export default{
  data() {
    return {
    };
  },
  getEndPoints() {
    const promise = axios.get('https://www.anapioficeandfire.com/api');
    return promise;
  },
};
