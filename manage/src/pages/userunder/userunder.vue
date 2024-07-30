<template>
	<div class="st-view">
    <div class="turn-back">
      <router-link to="/userCtrl/userFind" class="nav-button">  
          <el-button type="primary" >返回列表</el-button>
    </router-link>
    </div>
    <div class="tab-btn-box">
      <router-link to="/userCtrl/userunder/takeMessage" class="tab-btn">
          <el-button type="primary" plain  >发送短信</el-button>
      </router-link>
      <router-link to="/userCtrl/userunder/takeEmil" class="tab-btn">
          <el-button type="primary" plain  class="tab-btn">发送邮件</el-button>
      </router-link>
    </div>
    <div class="three-child">
         <router-view></router-view>
    </div>
		
	
	</div>
</template>
<script type="text/javascript">

export default {
  name: "notice",
  mounted() {},
  data() {	
  		return {};
  },
   mounted() {
  },
  components:{
   
  },
  methods:{


  }
}
</script>
<style type="text/css">
.turn-back{
  width: 100%;
  height: 50px;
}
.tab-btn-box{
   width: 100%;
  height: 50px;
}
  .nav-button{
    float: left;
    margin-left: 10px;
  }
  .tab-btn{
    float: left;
    margin-left: 10px;
  }
  .three-child{
    width: 100%;
    height: calc(100% - 100px);
  }
  .st-view{
    height: 100%;
  }

</style>