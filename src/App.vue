<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo"> 
    <ListData msg="Teste de homologação solicitado dia 04/05/2023"/>
  </div>
</template>

<script>
import ListData from './components/List.vue'

export default {
  name: 'App',
  components: {
    ListData
  },
  data() {
    return {  
      email: '' 
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 30rem;
}
</style>
