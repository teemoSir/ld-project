<template>
  <div class="nav">
      <div class="nav-name">
        <h5>ISCN后台管理系统</h5>
      </div>
      <div class="nav-right">
        <a>{{this.username}}</a>
        <a  @click="getOut()">退出</a>
      </div>
      
  </div>
</template>

<script type="text/javascript">
  export default {
  name: '',
  mounted(){


  },
  methods:{
    getOut(){ 
        window.location.href = this.config.usebase+"/logout"

    }
  }
}
</script>
<style type="text/less">
  @import "../../style/header.css";
</style>>