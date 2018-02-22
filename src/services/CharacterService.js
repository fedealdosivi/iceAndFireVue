import axios from 'axios';

export default{
  data() {
    return {
    };
  },
  getCharacters() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters');
    return promise;
  },
};