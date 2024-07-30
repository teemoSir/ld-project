<template>
  <div class="menu-list">
   <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
        <router-link to="/index" class="left-btn">
         <el-menu-item index="1" >
          <i class="el-icon-location"></i>
          <span slot="title">控制台</span>
        </el-menu-item>
        </router-link>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/userCtrl/userFind" class="left-btn">
            <el-menu-item index="1-1">用户查询</el-menu-item>
          </router-link>
          <router-link to="/userCtrl/analysis" class="left-btn">
          <el-menu-item index="1-2">用户分析</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>统计管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/statistical/userserver" class="left-btn">
            <el-menu-item index="1-1">服务概况</el-menu-item>
          </router-link>
          <router-link to="/statistical/key" class="left-btn">
          <el-menu-item index="1-2">key统计</el-menu-item>
          </router-link>
          <router-link to="/statistical/keymonitor/Basic" class="left-btn">
          <el-menu-item index="1-2">终端key监控</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>审核管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/audit/devaudit" class="left-btn">
            <el-menu-item index="1-1">开发者审核</el-menu-item>
          </router-link>
          <router-link to="/audit/sdkaudit" class="left-btn">
          <el-menu-item index="1-2">SDK专业版审核</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>需求管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/management" class="left-btn">
            <el-menu-item index="1-1">数据商城需求</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
       <router-link to="/download/openPage" class="left-btn">
         <el-menu-item index="6">
          <i class="el-icon-location"></i>
          <span slot="title">下载管理</span>
        </el-menu-item>
      </router-link>
        <router-link to="/feedback" class="left-btn">
         <el-menu-item index="7">
          <i class="el-icon-location"></i>
          <span slot="title">反馈管理</span>
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-col>
  
</el-row>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "menulist",
  mounted() {},
  data() {
    return {
     
    }
  },

  methods: {
       handleOpen(key, keyPath) {
        // console.log(key, keyPath);
        },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
 
  }
}

</script>
<style type="text/css">
.menu-list li {
  display: block;
  width: 200px;
  text-align: center;
  /*line-height: 50px;*/
  background: #F8F8F8;
  margin-top: 2px;
  color: #23527c;
  cursor: pointer;
}
.left-btn{
  text-decoration: none;
}

</style>>
