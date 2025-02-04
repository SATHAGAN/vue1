<template>
<div>
    <div class="ft">
        <nav>
            <h3>Stay connected</h3>
            <h3><span>&#128222;</span> +94761170203 <span>&#9993;</span>  mail.@exploreinlaka.com</h3>
        </nav>
        <div class="frm">
            <form action="">
                <label for="fnam">Name</label> <br>
                <input type="text"><br>
                <label for="email">Email</label><br>
                <input type="text" name="" id=""><br>
                <label for="cemail">Confirm Email</label><br>
                <input type="text" name="" id=""><br>
                <label for="con">Country</label><br>
                <select name="coun" id=""></select><br>
                <label for="phone"></label><br>
                <input type="number" name="" id=""><br>
                <label for="wht">whatapps </label><br>
                <input type="number" name="" id=""><br>
                <label for="date of travel">Date of travel</label><br>
                 <input type="date" name="" id=""><br>
                 <button>Submit</button>

                 <h5>all (*) marked fileld are mandatory</h5>

            </form>
        </div>
        
</div>
<div class="img-1">
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
<div class="frm">
    <h1>Write to us</h1>
    <h3>Field marked with an * are requried</h3>
    <form action="">
        <label for="">name</label><br>
        <input type="text"><br>
        <label for=""> email</label><br>
        <input type="email" name="" id=""><br>
        <label for="">message</label><br>
        <input type="text" name="" id=""><br>
        <button>Submit</button>
    </form>
</div>
<div>
    <h3>
        follow us on 
    </h3>
    <p>
        <center>
        Call us : +94761170203
<br>
Email us : mail@exploreinlanka.com
</center>
    </p>

</div>
 </div>

   

</template>
<style>
.ft{
    background-color: aliceblue;

}
.frm{
  justify-items: center;
    display: flexbox;
    padding: 10px;
    

}
form{
    padding: 20px;
    margin: 20px;

}
label{
    padding: 5px;
}
button{
    padding: 5px;
    margin: 10px;

    background-color: black;
    color: aliceblue;
}
.img-1{

    background-color: deepskyblue;
    padding: 100px;
}
</style>
