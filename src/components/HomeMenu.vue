<template>
  <div class="home-container">
    <h1>A Song of Ice and Fire</h1>
    <p class="subtitle">Explore the world of Westeros and Essos</p>
    <div class="home-cards">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Books</div>
          </md-card-header>
          <md-card-content>
            Browse all books in the A Song of Ice and Fire series.
          </md-card-content>
          <md-card-actions>
            <md-button :href="'/#/books'">Explore Books</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>

      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Houses</div>
          </md-card-header>
          <md-card-content>
            Discover the great houses of Westeros and their histories.
          </md-card-content>
          <md-card-actions>
            <md-button :href="'/#/houses'">Explore Houses</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>

      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Characters</div>
          </md-card-header>
          <md-card-content>
            Meet the characters from across the Known World.
          </md-card-content>
          <md-card-actions>
            <md-button :href="'/#/characters'">Explore Characters</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu',
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 40px 20px;
}

.home-container h1 {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 1.2em;
  margin-bottom: 40px;
}

.home-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.home-cards .md-card {
  width: 280px;
}
</style>
