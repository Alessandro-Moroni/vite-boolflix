<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
  export default {
    components:{
      Card,
    },
    props:{
      type: String
    },
    data(){
      return{
        store,
      }
    },
    
  }
</script>

<template>
  <div class="main-bc">
    <div class="container" v-if="store.cardListMovie.length > 0">
      <h2>Movie</h2>
      <div class="row  row-cols-4 ">
        
        <Card
        v-for="card in this.store.cardListMovie"
        :key="card.id"
        :original_title="card.original_title"
        :original_language="card.original_language"
        :title="card.title"
        :vote_average="card.vote_average"
        :poster_path="card.poster_path"
        :overview="card.overview" />
        
        
      </div>
    </div>
    
    <div class="container" v-if="store.cardListTv.length > 0">
      <h2>Tv series</h2>
      <div class="row  row-cols-4 ">

        <Card
          v-for="tv in this.store.cardListTv"
          :key="tv.id"
          :original_title="tv.original_name"
          :original_language="tv.original_language"
          :title="tv.name"
          :vote_average="tv.vote_average" 
          :poster_path="tv.poster_path"
          :overview="tv.overview"/>
        

      </div>
    </div>

    <div class="container" v-if="store.popularMovieList.length > 0">
      <h2>Popular Movie</h2>
      <div class="row  row-cols-4 ">
        
        <Card
        v-for="card in this.store.popularMovieList"
        :key="card.id"
        :original_title="card.original_title"
        :original_language="card.original_language"
        :title="card.title"
        :vote_average="card.vote_average"
        :poster_path="card.poster_path"
        :overview="card.overview" />
        
        
      </div>
    </div>

    <div class="container" v-if="store.popularSeriesList.length > 0">
      <h2>Popular Series</h2>
      <div class="row  row-cols-4 ">
        
        <Card
        v-for="card in this.store.popularSeriesList"
        :key="card.id"
        :original_title="card.original_title"
        :original_language="card.original_language"
        :title="card.title"
        :vote_average="card.vote_average"
        :poster_path="card.poster_path"
        :overview="card.overview" />
        
        
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.main-bc{
  background-color: rgb(67, 67, 67);
  height: 100vh;
  padding-top: 80px;
  overflow-y: scroll;
  .container{
    margin-top: 20px;
    h2{
      color: black;
      text-shadow: 0 0 5px red;
      margin-bottom: 20px;
    }
  }
}
</style>