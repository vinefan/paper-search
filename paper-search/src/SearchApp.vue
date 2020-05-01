<template>
  <div id="app">
    <div class="nav">
      <p>Paper - Search</p>
    </div>
    <!-- <div class="content"> 
      <div class="left-content">

      </div>

      <div class="right-content">

      </div>

    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #777;
}
@font-face {
  font-family: 'SFQuartzite-Oblique';
  src: url('./font/SFQuartzite-Oblique.ttf');
}
@font-face{
    font-family: 'ZEROES__';
  src: url('./font/ZEROES__.ttf');
}
.nav{
  width: 100%;
  height: 48px;
  background: linear-gradient(to bottom right, #222, #39536d);
  padding-left: 45px;
  padding-top: 20px;
}
.nav p{
  width: 50%;
  margin: 0 ;
  text-align: left;
  color: #fff;
  font-size: 30px;
  font-family: SFQuartzite-Oblique;
}
/* .cnotent{
  width: 100%;
} */
.left-content{
  float: left;
  width: 45%;
  height: 600px;
  background: #eee;
}
.right-content{
  width: 47%;
  height: 800px;

}
</style>
