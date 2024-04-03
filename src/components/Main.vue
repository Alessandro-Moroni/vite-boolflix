<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
  export default {
    components:{
      Card,
    },
    data(){
      return{
        store,
      }
    }
  }
</script>

<template>
  <div class="main-bc">
    <div class="container">
      <h2>Movie</h2>
      <div class="row  row-cols-4 ">
        
        <Card
        v-for="card in this.store.cardListMovie"
        :key="card.id"
        :original_title="card.original_title"
        :original_language="card.original_language"
        :title="card.title"
        :vote_average="card.vote_average" />
        
        
      </div>
    </div>
    
    <div class="container">
      <h2>Tv</h2>
      <div class="row  row-cols-4 ">

        <Card
          v-for="tv in this.store.cardListTv"
          :key="tv.id"
          :original_title="tv.original_name"
          :original_language="tv.original_language"
          :title="tv.name"
          :vote_average="tv.vote_average" />
        

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.main-bc{
  background-color: rgb(67, 67, 67);
  height: 100vh;
  padding-top: 80px;
  .container{
    margin-top: 20px;
  }
}
</style>