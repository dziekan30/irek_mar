<template>
  <div id="app">
    <!-- <div id="nav"> -->
   <!--    <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       -->
   <!--  </div> -->
    <router-view/>
  </div>
</template>

<style>
.header {
  text-align: center;
  font-weight: bold;
  height: 800px;
}
.logo {
  height: 200px;
  width: 200px;
}
.main-text {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
  font-weight: bold;
}

.jumbotron {
/*  background-image: url("/rsz_1rsz_irek_mar.png");
*/  background-size: cover;

}
.footer {
 /* margin-top: -100px;
  position: relative;
  background-color: black;*/
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2a262c;
  color: white;
}
.footer-logo {
  height: 140px;
  width: 140px;
  margin-bottom: 30px;
}
.i {
  margin-top: 20px;
  margin-right: 15px;
}
.text {
  margin: 10px;
  text-align: center;
}
.margin {
  margin-top: 40px;
  margin-bottom: 40px;
}
.text-color {
  color: white;
}
</style>
