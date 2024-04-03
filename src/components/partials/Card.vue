<script>

  export default {
    props:{
      original_title: String,
      original_language: String,
      vote_average: String,
      title: String,
      poster_path: String,
    },
   
   
  }
</script>

<template>
  <div class="col mb-5 ">

    <div class="card" style="width: 18rem;">
      <img :src="poster_path" class="card-img-top" :alt="poster_path">
      <div class="card-body">
        <h5 class="card-title">{{ original_title }}</h5>
        <p class="card-text">{{ original_language }}</p>
        <p class="card-text">{{ title }}</p>
        <p class="card-text">{{ vote_average }}</p>
        
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>