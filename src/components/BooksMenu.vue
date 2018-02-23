<template>
  <div class="cards-container">
      <div v-if="loading">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
      <h3 v-if="books.lenght<1">Nothing here</h3>
      <div v-else>
        <md-card md-with-hover v-for="(b,index) in books" :key="index">
          <md-ripple>
            <md-card-header>
              <div class="md-title">{{b.name}}</div>
              <div class="md-subhead">Number of Pages:{{b.numberOfPages}}</div>
            </md-card-header>
            <md-card-content>
              <div v-if="b.publisher!=''">
                <h3>Publisher</h3>
                {{b.publisher}}
              </div>
              <div v-if="b.released!=''">
                <h3>Date of Released</h3>
                {{b.released}}
              </div>
            </md-card-content>

            <md-card-actions>
              <md-button>Do something</md-button>
              <md-button>Do something</md-button>
            </md-card-actions>
          </md-ripple>
        </md-card>
      </div>
  </div>
</template>
<script>
import BookService from '../services/BookService';
export default {
  name: 'BooksMenu',
  data() {
    return {
      bookFilter:'',
      books:[],
      counter:0,
      loading:false
    };
  },

  created() {
   this.getBooks();
  },

  methods: {

    getBooks(){
      this.loading=true;
      BookService.getAllBooks()
      .then((response) => {
                      this.books = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.books=null;
                      this.loading=false;
                  })
               }
    },


  }
</script>
<style>
.cards-container{
  flex-wrap: wrap;
  column-count: 3;
  display: inline-block;
  align-items: flex-start;
}

.md-card{
  margin-bottom: 5%;
  margin-top: 5%;
}
</style>

