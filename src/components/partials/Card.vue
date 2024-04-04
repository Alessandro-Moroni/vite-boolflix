<script>
import { store } from '../../data/store';
  export default {
    props:{
      original_title: String,
      original_language: String,
      vote_average: Number,
      title: String,
      poster_path: String,
    },
   data(){
    return{
      store,
    }
   },
   methods:{
    createStars(vote){
      let stars = '';
      const finalVote = vote / 2;
      const finalStar = Math.floor(finalVote);
      const halfStar = finalVote % 1 >= 0.5;
      for(let i = 0; i < finalStar; i++){
        stars += '<i class="fa-solid fa-star"></i>';

      }if(halfStar){
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
      }
      const emptyStar = 5;
      for(let i = 0; i < finalStar; i++){

      }if(emptyStar){
        stars += '<i class="fa-regular fa-star"></i>';
      }
      
      return stars;
    },

   },
  
   
  }
</script>

<template>
  <div class="col mb-5 ">

    <div class="card" style="width: 18rem;">
      <img v-if="poster_path === null" src="../../assets/bandiere/img404.webp" class="card-img-top not-found" alt="">
      <img v-else :src="`https://image.tmdb.org/t/p/w342${poster_path}`" class="card-img-top" :alt="poster_path">
      <div class="card-body">
        <h5 class="card-title">{{ original_title }}</h5>
        <img class="flag" v-if="original_language === 'it'" src="../../assets/bandiere/it.png" alt="">
        <img class="flag" v-else-if="original_language === 'en'" src="../../assets/bandiere/en.png" alt=""> 
        <p class="card-text" v-else>{{ original_language }}</p>
        <p class="card-text">{{ title }}</p>
        <p class="card-text star" v-html="createStars(vote_average)"></p>
        
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.flag{
  width: 20%;
}
.star{
  color: rgb(243, 205, 110);
}
.not-found{
  height: 430px;
  object-fit: contain;
}
</style>