<template>
  <div class="cards-container">
      <h3 v-if="loading">LOADING PAGE</h3>
      <h3 v-if="houses.lenght<1">Nothing here</h3>
      <div v-else>
        <md-card class="my-card" md-with-hover v-for="(h,index) in houses" :key="index">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Card with hover effect</div>
              <div class="md-subhead">It also have a ripple</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-ripple>
        </md-card>
      </div>
  </div>
  
</template>
<script>
import HouseService from '../services/HouseService';
export default {
  name: 'HouseMenu',
  data() {
    return {
      houseFilter:'',
      houses:[],
      loading:false
    };
  },

  created() {
   this.getHouses();
  },

  methods: {

    getHouses(){
      this.loading=true;
      HouseService.getHouses()
      .then((response) => {
                      this.houses = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.houses=null;
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
.my-card{
  margin:5px,5px,5px,5px;
}
</style>

