<template>
  <div id="app">

    <div class="banner">
      <h1 class="feature">Structuralizing</h1>
      <h1>Paper - Search</h1>
    </div>

    <div class="search">
      <div class="search-box">
          <el-input placeholder="标题 / 作者 / 关键词" v-model="input" class="input-with-select" size="large">
            <el-select v-model="select" slot="prepend" placeholder="" class="select">
              <el-option label="作者" value="1"></el-option>
              <el-option label="标题" value="2"></el-option>
              <el-option label="关键字" value="3"></el-option>
              <el-option label="全局" value="4"></el-option>
            </el-select>
          </el-input>
      </div>
      <div class="button">
        <el-button icon="el-icon-search" type="primary" size="large" round></el-button>
      </div>
    </div>
    
    <div class="footer">
      <p>From team : Nan , Fan , Jiu</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return{
      input: '',
      select: '搜索模式'
    }
  }
  
}
</script>

<style>


.input-with-select{
  height: 44px;
}
.input-with-select input
{
  height: 44px;
}
.el-select .el-input {
    width: 120px;
}


@font-face {
  font-family: 'SFQuartzite-Oblique';
  src: url('./font/SFQuartzite-Oblique.ttf');
}
@font-face{
    font-family: 'ZEROES__';
  src: url('./font/ZEROES__.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 850px;
  background-color: #2c3e50;
  background: linear-gradient(to bottom, #2c3e50, #888);
}

.banner{
  padding-top: 140px;
}
.banner h1{
  min-width: 620px;
  text-align: left;
  width: 43%;
  height: 90px;
  padding: 0;
  margin: 0 auto 0;
  font-size: 70px;
  font-family: SFQuartzite-Oblique;
}
.banner .feature{
  font-size: 65px;
}

.search{
  width: 80%;
  margin: 50px auto;
}

.search .search-box{
  width: 75%;
  display: inline-block;
  padding-left: 7%;
}
.search .button{
  width: 10%;
  display: inline-block;
}

.footer{
  margin-top: 220px;
  height: 100px;
  font-family: ZEROES__;
  /* font-weight: 100; */
}
.footer p{
  font-size: 18px;
}

</style>
