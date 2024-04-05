<script>
import axios from 'axios';
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue'; 
export default {
   components:{
    Header,
    Main,
   },
   data(){
    return{
      store,
    }
   },

   methods:{
    // funzione per i film

    getApiMovie(){
      axios.get(this.store.apiUrlMovie, {
        params: this.store.queryParams
      })
      .then(res => {
        this.store.cardListMovie = res.data.results
        console.log(this.store.cardListMovie);
      })
      .catch(error => {
        console.log(error);
      })
    },

    // funzione per le serie tv
    
    getApiTv(){
      axios.get(this.store.apiUrlTv, {
        params: this.store.queryParams
      })
      .then(res => {
        this.store.cardListTv = res.data.results
        console.log(this.store.cardListTv);
      })
      .catch(error => {
        console.log(error);
      })
    },

    // funzione popular movie
    getPopularMovie(){
      axios.get(this.store.popularMovieApi, {
        params:{
          api_key: '3f94080f310f95df3a4a3635805ca441',
          language: 'it-It',
          query: '',
        }
      })
      .then(res => {
        this.store.popularMovieList = res.data.results
        console.log(this.store.popularMovieList);
      })
      .catch(error => {
        console.log(error);
      })
    },

    // funzione popular series
    getPopularSeries(){
      axios.get(this.store.popularSeriesApi, {
        params:{
          api_key: '3f94080f310f95df3a4a3635805ca441',
          language: 'it-It',
          query: '',
        }
      })
      .then(res => {
        this.store.popularSeriesList = res.data.results
        console.log(this.store.popularMovieList);
      })
      .catch(error => {
        console.log(error);
      })
    },
   },
   mounted(){
    this.getApiMovie()
    this.getApiTv()
    this.getPopularMovie()
    this.getPopularSeries()
   }
  }
</script>

<template>
  <Header @searchTitle="getApiMovie(), getApiTv()" />

  <Main />
</template>


<style lang="scss" >

</style>