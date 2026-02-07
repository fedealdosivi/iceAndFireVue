<template>
  <div class="cards-container">
      <div v-if="loading">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
      <h3 v-if="houses.length<1">Nothing here</h3>
      <div v-else>
        <md-card md-with-hover v-for="(h,index) in houses" :key="index">
          <md-ripple>
            <md-card-header>
              <div class="md-title">{{h.name}}</div>
              <div class="md-subhead">{{h.words}}</div>
            </md-card-header>
            <md-card-content>
              <div v-if="h.coatOfArms!=''">
              <h3>Coat of Arms</h3>
              {{h.coatOfArms}}
              </div>
              <div v-if="h.region!=''">
              <h3>Region</h3>
              {{h.region}}
              </div>
            </md-card-content>

            <md-card-actions>
              <md-button>Discover Lord</md-button>
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
      counter:0,
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
                      this.houses=[];
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

