<template>
  <div id="app">
   <Header></Header>
   <div class="tab">
     <div class="tab-item">
       <router-link class="routerlink" to="/food">Food</router-link>
      </div>
     <div class="tab-item"><router-link class="routerlink" to="/ratings">Ratings</router-link></div>
     <div class="tab-item"><router-link class="routerlink" to="/seller">Seller</router-link></div>
   </div>
   <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/Header";

export default {
  name:"app",
  components:{
    Header
  }
}
</script>

<style>
div.tab{
      display:flex;
      width:100%;
      height: 40px;
      line-height:40px;
}
div.tab-item{
  flex:1;
  text-align:center;
}
.routerlink {
  display:block;
  text-decoration:none;
  font-size:14px;
  color:rgb(77, 85, 93)
}

.router-link-active {
  color:rgb(240, 20, 20)
}

</style>
