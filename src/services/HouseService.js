import axios from 'axios';

export default{
  getHouses() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses');
    return promise;
  },
  getHousesById(id) {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses/'+id);
    return promise;
  },
  getHousesByName(name) {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?name='+name);
    return promise;
  },
  getHousesByRegion(region) {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?region='+region);
    return promise;
  },
  getHousesWithWords() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?hasWords=true');
    return promise;
  },
  getHousesWithTitles() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?hasTitles=true');
    return promise;
  },
  getHousesWithSeats() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?hasSeats=true');
    return promise;
  },
  getHousesHasDied() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?hasDiedOut=true');
    return promise;
  },
  getHousesWithAncestralWeapons() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/houses?hasAncestralWeapons=true');
    return promise;
  },
};