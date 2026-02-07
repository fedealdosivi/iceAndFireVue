import axios from 'axios';

export default{
  getEndPoints() {
    const promise = axios.get('https://www.anapioficeandfire.com/api');
    return promise;
  },
};
