<template>
  <div class="notice-user">
    <div class="notice-top">
      <div class="notice-top-btn">
        <router-link to="/userCtrl/userunder">
          <el-button type="primary" class="toAsk">通知用户</el-button>
        </router-link>
      </div>
      <div class="dataPicker">
     	 	<dataPicker></dataPicker>
      	
      </div>
      <div class="notice-search">
      		<v-search></v-search>
      </div>
  
    </div>
    <div class="notice-nav">
    	<v-notice @searchDataChange="searchDataChange"></v-notice>
    </div>
	<el-table
    :data="tableData"
    border
    class="spHeight"
    style="width: 100%">
	    <el-table-column
	      fixed
	      prop="userName"
	      label="用户名"
	      width="150">
	    </el-table-column>
	    <el-table-column
	      prop="names"
	      label="昵称"
	      width="70">
	    </el-table-column>
	    <el-table-column
	      prop="telnumber"
	      label="电话号码"
	      width="200">
	    </el-table-column>
	    <el-table-column
	      prop="emils"
	      label="邮箱"
	      width="200">
	    </el-table-column>
	    <el-table-column
	      prop="status"
	      label="用户状态"
	      width="100">
	    </el-table-column>
	    <el-table-column
	      prop="from"
	      label="注册来源"
	      width="120">
	    </el-table-column>
	     <el-table-column
	      prop="time"
	      label="注册时间"
	      width="120">
	    </el-table-column>

	    <el-table-column
	      fixed="right"
	      label="用户详情"
	      width="100">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
	        <!-- <el-button type="text" size="small">失效</el-button> -->
	      </template>
	    </el-table-column>
	      <el-table-column
	      fixed="right"
	      label="key信息"
	      width="100">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
	        <!-- <el-button type="text" size="small">失效</el-button> -->
	      </template>
	    </el-table-column>
	      <el-table-column
	      fixed="right"
	      label="操作"
	      width="100">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">失效</el-button>
	        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
	        <!-- <el-button type="text" size="small">失效</el-button> -->
	      </template>
	    </el-table-column>
	  </el-table>
	  <v-pages></v-pages>
  </div>
</template>
<script type="text/javascript">
import dataPick from "../../components/datatime/datatime.vue"
import search from "../../components/search/search.vue"
import noticeNav from "../../components/noticeNav/noticeNav.vue"
import bus from '@/components/bus/bus.js'
import pages from './components/pages.vue'

export default {
  name: "notice",
  components:{
  	"dataPicker":dataPick,
  	"v-search":search,
  	"v-notice":noticeNav,
  	"v-pages":pages,
  },
  data() {
  	 return {
  	 	  input: '',
  	 	  tableData: [
  	 	  {
	          date: '2016-05-03',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-02',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        },
	          {
	          date: '2016-05-03',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-02',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        },
	        {
	          date: '2016-05-01',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        },
	        {
	          date: '2016-05-01',
	          names: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        },
	       ]
  	 }
  },
  mounted(){
  	// bus.$on('searchDataChange',(val)=>{
  	// 	debugger
  	// })
  },
  methods:{
  	searchDataChange(val){

  	}
  }
}

</script>
<style type="text/less">
 @import"./style/userFind.css"
 

</style>
