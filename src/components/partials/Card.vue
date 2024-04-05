<script>
import { store } from '../../data/store';
  export default {
    props:{
      original_title: String,
      original_language: String,
      vote_average: Number,
      title: String,
      poster_path: String,
      overview: String,
    },
   data(){
    return{
      store,
    }
   },
   methods:{
    createStars(vote){
      const stars = [];
      const finalVote = vote / 2;
      let halfStar = finalVote % 1 !== 0;
      for(let i = 0; i < 5; i++){
        if(i < finalVote){
          stars.push('<i class="fa-solid fa-star"></i>');

        }else if(halfStar){
          stars.push('<i class="fa-solid fa-star-half-stroke"></i>');
          halfStar = false;

        }else{
          stars.push('<i class="fa-regular fa-star"></i>');
        }
        
      }
      return stars.join('');
  
      
    },

   },
  
   
  }
</script>

<template>
  <div class="col mb-5 ">

    <div class="card-movie" style="width: 18rem;">
      <img v-if="poster_path === null" src="../../assets/bandiere/img404.webp" class="not-found" alt="">
      <img v-else :src="`https://image.tmdb.org/t/p/w342${poster_path}`" class="not-found" :alt="poster_path">
      <div class="description">
       
        <h5 class="movie-text">{{ original_title }}</h5>
        <p class="movie-text mini-title">{{ title }}</p>
        <img class="flag movie-text" v-if="original_language === 'it'" src="../../assets/bandiere/it.png" alt="">
        <img class="flag movie-text" v-else-if="original_language === 'en'" src="../../assets/bandiere/en.png" alt=""> 
        <p class="movie-text" v-else>{{ original_language }}</p>
        <p class="movie-text star" v-html="createStars(vote_average)"></p>
        <p class="movie-text text-description">{{ overview }}</p>
    
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.flag{
  width: 20%;
  border-radius: 20px;
  margin: 10px 0;
}
.star{
  color: rgb(243, 205, 110);
}
.not-found{
  object-fit: contain;
  height: 430px;
  width: 290px;
}
.card-movie{
  position: relative;
  text-shadow: 0 0 3px black;

  .description{
    color: white;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    height: 430px;
    

    .movie-text{
      opacity: 0;
    }
    h5{
      color: red
    }
    .mini-title{
      margin: 10px 0;
      
    }
 
  }
}

.card-movie:hover .not-found{
  transform: scale(1.08);
  opacity: .4;
  transition: .8s;
  box-shadow: 0 0 30px rgb(238, 238, 235);
}
.card-movie:hover .movie-text{ 
  transition: 1.5s;
  opacity: 100%;
}
.card-movie:hover .description{
  overflow: auto;
  scrollbar-width: thin;

}



</style>