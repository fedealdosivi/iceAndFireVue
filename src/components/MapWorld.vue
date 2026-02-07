<template>
  <div class="map-container">
    <h1>Map of the Known World</h1>
    <md-card>
      <md-card-content>
        <p>
          An interactive map feature is planned for a future update.
        </p>
        <p>
          In the meantime, you can explore the world through the
          <a :href="'/#/houses'">Houses</a> and
          <a :href="'/#/characters'">Characters</a> sections.
        </p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'MapWorld',
};
</script>

<style scoped>
.map-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
}

.map-container h1 {
  color: #333;
  margin-bottom: 20px;
}

.map-container p {
  line-height: 1.6;
  margin-bottom: 16px;
}

.map-container a {
  color: darkblue;
}
</style>
