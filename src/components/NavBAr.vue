<template>
  <div class="navbar">
    
    <router-link to="/">Home</router-link>
    <router-link to="/tourpack">TourPackage</router-link>
    <a href="">Gallery</a>
    <a href="">about</a>
    <a href="">Contact Us</a>
   
  </div>
  

</template>
<style >
   .navbar{
    padding-top: 20px;
    background:deepskyblue;
    position: fixed;
    display: flex;
    width:100%;
    padding-bottom: 30px;
    justify-content: center;
  
    
   }
   .navbar a{
    background:none;
    text-decoration: none;
    color: black;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    
    
   }
   .navbar :hover{
    background: yellow;
    display: inline;

   }

</style>

