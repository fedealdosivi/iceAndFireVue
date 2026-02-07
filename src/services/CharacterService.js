import axios from 'axios';

export default{
  getCharacters() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters');
    return promise;
  },
  getCharacterByName(name) {
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters?name='+name);
    return promise;
  },
  getCharacterById(id) {
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters/'+id);
    return promise;
  },
  getCharactersByGender(gender){
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters?gender='+gender);
    return promise;
  },
  getCharactersByCulture(culture){
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters?culture='+culture);
    return promise;
  },
  getCharactersDead(){
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters?isAlive=false');
    return promise;  
  },
  getCharactersAlive(){
    const promise = axios.get('https://www.anapioficeandfire.com/api/characters?isAlive=true');
    return promise;
  }
};