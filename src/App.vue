<template>
  <div class="padding-0" id="app">
    <NavBar/>
    <div class="row">
        <div class="row">
          <Home class="HOME" id="HOME"/>
        </div>
        <div class="row">
              <About class="ABOUT" id="ABOUT"/>
        </div>
        <div class="row">
          <Tech class="TECH" id="TECH"/>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// layout
const NavBar = () => import('./components/layout/NavBar.vue');
// pages
const Home = () => import('./components/Home.vue');
const About = () => import('./components/About.vue');
const Tech = () => import('./components/Tech.vue');

export default {
  name: 'app',
  components: {
    NavBar,
    Home,
    About,
    Tech
  }
}
</script>

<style>
* { 
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg,rgb(75,185,185), rgb(0,95,135));
}
.padding-0{
    padding-right:0;
    padding-left:0;
}
.row{
  height:100%;
  width:100%;
  padding:0;
  margin:auto; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: transparent;
  height:100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
