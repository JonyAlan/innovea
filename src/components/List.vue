<template>
  <div class="hello">
    <h2 class="mt-4 mb-4">{{ msg }}</h2>
     
      <div class="row mx-4 my-4">
        <div class="col-1"></div>
        
        <div class="col-10 card">
          <div>
            <SpinnerLoad v-if="loading" />
            <b-table v-else striped hover :items="items" :fields="fields"></b-table>
            <h3>{{ message }}</h3>
          </div> 
        </div> 
        <div class="col-1"></div>
      </div>
   
  </div>
</template>

<script>
import axios from "axios";  

export default {
  name: 'ListData',
  props: {
    msg: String
  },
  data() {
    return {  
      loading: false,
      fields: [
        { key: 'author', label: 'Autor' },
        { key: 'title', label: 'Título' },
        { key: 'description', label: 'Descrição' },
         
      ], 
      items: [],
      message: '' 
    }
  },

  mounted(){
    this.changeData()
  },

  methods: {
    
    changeData() {

      var self = this; 
      this.loading = true;
      self.message = '' 
 
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-08&sortBy=publishedAt&apiKey=${process.env.VUE_APP_API_KEY}`)
      .then(async (response) => {
        self.items = response.data.articles
        self.loading = false; 

      })
      .catch(function () {
        self.loading = false 
        self.message = 'Requisição não retornou resultado, verifique se ao rodar o projeto foi utilizado o .env de desenvolvimento!' 
      });


    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 
</style>
