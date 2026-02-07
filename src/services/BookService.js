import axios from 'axios';

export default{
  getAllBooks() {
    const promise = axios.get('https://www.anapioficeandfire.com/api/books');
    return promise;
  },
  getBookById(id){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books/'+id);
    return promise;
  },
  getBookByName(name){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books?name='+name);
    return promise;
  },
  getBookFromReleaseDate(date){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books?fromReleaseDate='+date);
    return promise;
  },
  getBookToReleaseDate(date){
    const promise=axios.get('https://www.anapioficeandfire.com/api/books?toReleaseDate='+date);
    return promise;
  },
};
