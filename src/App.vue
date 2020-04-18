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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
