<template>
  <div class="home">
    <!-- header -->
    
    <div class="jumbotron jumbotron-fluid header">
      <div class="container">
        <img src="/irek_mar.png" class="rounded mx-auto d-block logo" >
      </div>
      <div>
       
        <h1 class="display-1 main-text">Welcome to Irek Mar Salon & Spa!</h1>
        <br>
        <h4 class="display-4">(773)-637-2575</h4>
      </div>
    </div>

    <!-- body -->

    <div class="container">
      <h1 class="text margin">About Us</h1>
      <div class="card mb-3" style="max-width: 1100px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 " style="max-width: 1100px;">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="card-img" alt="...">
          </div>
        </div>
      </div>

      <div class="card mb-3" style="max-width: 1100px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

     <div class="row margin">
       <div class="col-sm-6">
         <div class="card">
           <div class="card-body">
             <h3 class="card-title">Our Salon</h3>
             <h4 class="card-text">6425 W IRVING PARK CHICAGO</h4>
             <h4 class="card-text">(773)-637-2575</h4>
           </div>
         </div>
       </div>

       <div class="col-sm-6">
         <div class="card">
           <div class="card-body">
             <h3 class="card-title">Our Hours</h3>
             <h4 class="card-text">Mon - Fri 9am to 6pm</h4>
             <h4 class="card-text">Saturday 11am to 6pm</h4>
             <h4 class="card-text">Sunday - close</h4>
           </div>
         </div>
       </div>
     </div>

    </div>
     
     <template>
       <div>
         <div class="google-map" ref="googleMap"></div>
         <template v-if="Boolean(this.google) && Boolean(this.map)">
           <slot
             :google="google"
             :map="map"
           />
         </template>
       </div>
     </template>


    <!-- footer -->

    <div class="card text-center footer">
      <div class="card-body ">
        <h1 class=" text card-title">Follow us</h1>
        <div class="row">
          <div class="container col-sm-4 ">
            <img src="/irek_mar.png" class="rounded mx-auto d-block footer-logo" alt="...">
          </div>
          <div class="row col-sm-6">
          <a href="https://www.facebook.com/Irekmarsalonandspa/?__tn__=%2Cd%2CP-R&eid=ARDOxn-iKgOtUGdiPeSXvjMlGbg1ffVoSMqY24px7n5czk3TzbEfC8E59lsOMTUITXTRNiuZu6X0D-4v"><i class="i fab fa-facebook display-4"></i></a>
          <a href="https://www.instagram.com/irek_mar_salon_and_spa/"><i class="i fab fa-instagram display-4"></i></a>
          <i class="i fab fa-pinterest display-4"></i>
          </div> 
        </div>

      </div> 
      <p> © 2020 Irek Mar Salon & Spa All Right Reserved. Website powered & designed by K.D.</p>
    </div>

  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>




