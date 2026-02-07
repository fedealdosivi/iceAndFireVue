<template>
  <div class="about-container">
    <h1>About This Project</h1>
    <md-card>
      <md-card-content>
        <p>
          This application is a Vue.js client for the
          <a href="https://anapioficeandfire.com/" target="_blank">An API of Ice and Fire</a>,
          a free RESTful API that provides data about the universe of Ice and Fire
          as described in the books by George R.R. Martin.
        </p>
        <p>
          You can browse books, houses, and characters from the series.
        </p>
        <h3>Technology</h3>
        <ul>
          <li>Vue.js 2 with Vue Router</li>
          <li>Vue Material for UI components</li>
          <li>Axios for HTTP requests</li>
        </ul>
        <h3>API Credit</h3>
        <p>
          Data provided by
          <a href="https://anapioficeandfire.com/" target="_blank">An API of Ice and Fire</a>
          by Joakim Skoog.
        </p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'AboutProject',
};
</script>

<style scoped>
.about-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
}

.about-container h1 {
  color: #333;
  margin-bottom: 20px;
}

.about-container p {
  line-height: 1.6;
  margin-bottom: 16px;
}

.about-container ul {
  margin-bottom: 16px;
}

.about-container a {
  color: darkblue;
}
</style>
