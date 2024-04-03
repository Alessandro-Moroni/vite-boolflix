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
      <div class="row  row-cols-4 ">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

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
    border: 1px solid white;
    height: 600px;
    margin-top: 20px;
  }
}
</style>