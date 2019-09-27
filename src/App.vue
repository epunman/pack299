<template>
  <div id="app">
    <img alt="CSRanks" src="@/assets/logo.png">
    <p></p>
    <Navigation></Navigation>
    <p></p>
    <router-view/>
      <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
        With Bootstrap!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>