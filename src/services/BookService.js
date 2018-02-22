import axios from 'axios';

export default{
  data() {
    return {
    };
  },
  getAllBooks() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/books');
    return promise;
  },
  getBookById(id){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books/'+id);
  },
  getBookByName(name){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books?name='+name);
  },
  getBookFromReleaseDate(date){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books?fromReleaseDate='+date);
  },
  getBookToReleaseDate(date){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books?toReleaseDate='+date);
  },
};