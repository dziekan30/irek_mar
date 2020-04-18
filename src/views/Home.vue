<template>
  <div class="home">
    <!-- header -->
    
    <div class="jumbotron jumbotron-fluid header">
      <div class="container">
        <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10714396_854218474610980_5548625635518804257_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQm6obXbU9ULz5JUPyyQ7aTUm5JnWOhDcpear-rgvmVtWboqXb8grCcqq--7ss_D6aMdzwax6aPuLcXQVwE9xV_w&_nc_ht=scontent-ort2-2.xx&oh=21fd62f301c8f09d891be1130c7c7f86&oe=5EBEE864" class="rounded mx-auto d-block logo" alt="...">
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
      <div class="card mb-3" style="max-width: 940px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 " style="max-width: 940px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3" style="max-width: 940px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="" class="card-img" alt="...">
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
             <h4 class="card-text">Mon - Sat 9am to 6pm</h4>
             <h4 class="card-text">Sunday close</h4>
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
            <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10714396_854218474610980_5548625635518804257_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQm6obXbU9ULz5JUPyyQ7aTUm5JnWOhDcpear-rgvmVtWboqXb8grCcqq--7ss_D6aMdzwax6aPuLcXQVwE9xV_w&_nc_ht=scontent-ort2-2.xx&oh=21fd62f301c8f09d891be1130c7c7f86&oe=5EBEE864" class="rounded mx-auto d-block footer-logo" alt="...">
          </div>
          <div class="row col-sm-6">
          <a href="https://www.facebook.com/Irekmarsalonandspa/?__tn__=%2Cd%2CP-R&eid=ARDOxn-iKgOtUGdiPeSXvjMlGbg1ffVoSMqY24px7n5czk3TzbEfC8E59lsOMTUITXTRNiuZu6X0D-4v"><i class="i fab fa-facebook display-4"></i></a>
          <i class="i fab fa-instagram display-4"></i>
          <i class="i fab fa-pinterest display-4"></i>
          </div>
        </div>

      </div>
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




