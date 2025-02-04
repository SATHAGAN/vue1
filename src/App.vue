<template>
     <div class="page" >
      <nav >
        <nav-b-ar/>
      </nav>
    <div class="small-con">
      <home-view/>
     </div>
     <div class="scrollll">
      <sc-rool/>
      
      
     </div>
     <div>
      <forms-trip/>
     </div>
     </div>

     
</template>

<script>
import HomeView from './components/HomeView.vue'
//import TourPackage from './components/TourPackage.vue'
import NavBAr from './components/NavBAr.vue'
import ScRool from './components/ScRool.vue'
import FormsTrip from'./components/FormsTrip.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    NavBAr,
    ScRool,
    FormsTrip,
    
  }
}
</script>

<style>
#app {
  background-color: deepskyblue;
  justify-items:auto;
}

</style>
