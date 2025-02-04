<template>
    <div class="sc">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="public/download.jpeg" class="d-block w-100" alt=" 12 days trip">
    </div>
    <div class="carousel-item">
      <img src="src/assets/monkey.png" class="d-block w-100" alt="5 days trip">
    </div>
    <div class="carousel-item">
      <img src="public/download.jpeg" class="d-block w-100" alt="10 days trip">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</template>
<script>
export default {
    name: 'ScRoll'
    }
</script>
<style scoped>
 .sc{
    padding:100px;
 }
 img{
    text-align: center;
 }
</style>