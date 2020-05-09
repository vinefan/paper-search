<template>
  <div id="search-app">
    <div class="nav">
      <h2>Paper - Search</h2>
    </div>
    <div class="content">

      <div class="left-content">

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
        
        <div class="papars">


        </div>
        
      </div>

      <div class="right-content">

      </div>

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
  },
  mounted: function(){

  }
  
}
</script>

<style scoped>

#search-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #777;
  background: rgb(235, 236, 236);
  /* background: linear-gradient(to bottom, #2c3e50, #aaa); */
  /* background: linear-gradient(to bottom right, #222, #39536d); */
  width: 100%;
  height: 900px;
  min-width: 1200px;
}
@font-face {
  font-family: 'SFQuartzite-Oblique';
  src: url('../font/SFQuartzite-Oblique.ttf');
}
@font-face{
    font-family: 'ZEROES__';
  src: url('../font/ZEROES__.ttf');
}
.nav{
  width: 100%;
  height: 55px;
  background: rgb(36, 33, 33);
  background: linear-gradient(to bottom right, #2c3e50, #777);

}
.nav h2{
  width: 50%;
  height: 45px;
  margin-top: 0;
  text-align: left;
  padding-top: 12px;
  padding-left: 40px;
  color: #fff;
  font-size: 30px;
  font-family: SFQuartzite-Oblique;
}

.left-content{
  float: left;
  width: 48%;
  min-width: 450px;
  height: 600px;
  margin: 10px 6%;
}
.right-content{
  width: 36%;
  min-width: 470px;
  height: 800px;
  background: #fff;
  float: left;
  margin-top: 10px;
  border-radius: 5px;
}

.search{
  background: #fff;
  width: 100%;
  height: 60px;
  border-radius: 4px;
  margin-top: 20px;
}
.search .search-box{
  width: 80%;
  float: left;
  margin: 10px 2%;
  padding-left: 0;
}

.search .button{
  float: left;
  margin-top: 10px;
  padding-top: 2px;

}

.el-select .el-input {
    width: 120px;
}



</style>
