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
