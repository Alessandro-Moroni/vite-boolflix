<script>
import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
        searchMovie: '',
       
      }
    },
    methods:{
      searchTitle(){
        this.store.queryParams.query = this.searchMovie;
       this.store.popularMovieList = [];
       this.store.popularSeriesList = [];
        this.$emit('searchTitle')
      },
      resetSearch(){
        this.searchMovie = '';
      
      },
    }
  }
</script>

<template>
  <div class="container-fluid d-flex justify-content-between align-items-center p-3">
    <div class="logo">
      <img src="../assets/bandiere/boolflix-logo.png" alt="">
    </div>


    <div class=" search-bar d-flex ">
      <input
        type="text"
        placeholder="Search a title..."
        v-model.trim="searchMovie"
        @change="searchTitle">

      <button @click="searchTitle" type="button" class="btn btn-danger ms-2">Search</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container-fluid{
  height: 80px;
  background-color: black;
  position: fixed;
  z-index: 1;
  h1{
    color: rgb(220, 26, 40);
  }
 
}

.logo{
  object-fit: contain;
  img{
    width: 230px;
  }
}
input{
  border-radius: 8px;
}
.btn{
  background-color: rgb(220, 26, 40);
}
</style>