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
    getApi(){
      axios.get(store.apiUrlMovie, {
        params:{
          api_key: '3f94080f310f95df3a4a3635805ca441',
          original_title: '',
          original_language: '',
          vote_average: '',
          title: '',

        }
      })
      .then(res => {
        this.store.cardListMovie = res.data.results
        console.log(this.store.cardListMovie);
      })
    }
   },
   mounted(){
    this.getApi()
   }
  }
</script>

<template>
  <Header />

  <Main />
</template>


<style lang="scss" >

</style>