<script>
import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
      }
    }
    
  }
</script>

<template>
  <div class="container-fluid d-flex justify-content-between align-items-center p-3">
    <h1>BOOLFLIX</h1>

    <div class=" search-bar d-flex ">
      <input type="text">
      <button type="button" class="btn btn-danger mx-2">Search</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container-fluid{
  height: 80px;
  background-color: black;
  position: fixed;
  h1{
    color: red;
  }
 
}
</style>