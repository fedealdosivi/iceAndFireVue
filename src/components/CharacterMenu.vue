<template>
    <div class="cards-container">
      <div v-if="loading">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
      <h3 v-if="characters.length<1">Nothing here</h3>
      <div v-else>
        <md-card md-with-hover v-for="(c,index) in characters" :key="index">
          <md-ripple>
            <md-card-header>
              <div class="md-title">
                <div v-if="c.name==''">No Name</div>
                <div v-else>{{c.name}}</div>
              </div>
              <div class="md-subhead">Gender:{{c.gender}}</div>
            </md-card-header>
            <md-card-content>
              <div v-if="c.culture!=''">
                <h3>Culture</h3>
                {{c.culture}}
              </div>
              <div v-if="c.aliases[0]!=''">
                <h3>Alias</h3>
                {{c.aliases[0]}}
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
import CharacterService from '../services/CharacterService';
export default {
  name: 'CharacterMenu',
  data() {
    return {
      characterFilter:'',
      characters:[],
      counter:0,
      loading:false
    };
  },

   created() {
   this.getCharacters();
  },

  methods: {

    getCharacters(){
      this.loading=true;
      CharacterService.getCharacters()
      .then((response) => {
                      this.characters = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.characters=[];
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