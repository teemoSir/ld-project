<template>
	<div class="basic">
		<div class="basic-top">
			<div class="basic-top-left">
				<p>终端上限:1000</p>
			<span>编辑</span>
			</div>
			<div class="basic-top-right">
				<p>预警推送邮箱:xx@www.com.cn</p>
				<span>编辑</span>
			</div>
		</div>
		<div class="basic-table-top">
			<dataPicker class="basic-data"></dataPicker>
				<div class="basic-btn">
				<el-button type="primary">搜索</el-button>
			
			</div>
			<div class="basic-ipt">
			<el-input v-model="input" placeholder="请输入用户名称/key"></el-input>
			
			</div>
		
		</div>
		<div class="basic-table-tab">
			<div class="basic-table-kids">
				<span>应用类型</span>
				 <el-select v-model="status" class="basic-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in applicationType" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="basic-table-kids">
				<span>终端数量</span>
				 <el-select v-model="status1" class="basic-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in terminalNum" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="basic-table-kids">
				<span>终端限制</span>
				 <el-select v-model="status2" class="basic-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in terminalRestriction" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="basic-table-kids">
				<span>白名单控制</span>
				 <el-select v-model="status3" class="basic-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in whitelist" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="basic-table-kids">
				<span>key状态</span>
				 <el-select v-model="status4" class="basic-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in keystatus" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
		</div>
		<div class="basic-table">
			<el-table
		      :data="tableData"
		      style="width: 100%"
		      border 
		      >
		      <el-table-column
		        prop="name"
		        label="应用名称"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="type"
		        label="应用类型"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="keyname"
		        label="key">
		      </el-table-column>
		        <el-table-column
		        prop="ceiling"
		        label="终端上限数">
		      </el-table-column>
		        <el-table-column
		        prop="limit"
		        label="终端限制">
		      </el-table-column>
		        <el-table-column
		        prop="whitelist"
		        label="白名单控制">
		      </el-table-column>
		        <el-table-column
		        prop="creatdata"
		        label="申请日期">
		      </el-table-column>
		        <el-table-column
		        prop="data"
		        label="有效日期">
		      </el-table-column>
		        <el-table-column
		        prop="keystatus"
		        label="key状态">
		      </el-table-column>

		    </el-table>
		</div>
	</div>
</template>
<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"
// import search from "@/components/search/search.vue"
export default{
	name:"Basic",
	data(){
		return{
			input:"",
			applicationType:[],
			terminalNum:[],
			terminalRestriction:[],
			whitelist:[],
			keystatus:[],
			status:'',
			status1:'',
			status2:'',
			status3:'',
			status4:'',
			tableData:[],
		}
	},
	components:{
		dataPicker,
		// search,
	},
	created(){
		this.getapplicationType();
	},
	methods:{
		getapplicationType:function(){
			this.applicationType=[
				{
					value: '1',
            		label: '全部'
				},
					{
					 value: '2',
            		label: 'Android'
				},
					{
					 value: '3',
            		label: 'IOS'
				}
			],
			this.terminalNum=[
				{
					value: '1',
            		label: '全部'
				},
					{
					 value: '2',
            		label: '正常'
				},
					{
					 value: '3',
            		label: '超限'
				}
			],
			this.terminalRestriction=[
				{
					value: '1',
            		label: '全部'
				},
					{
					 value: '2',
            		label: '关闭'
				},
					{
					 value: '3',
            		label: '开启'
				}
			],
			this.whitelist=[
				{
					value: '1',
            		label: '全部'
				},
					{
					 value: '2',
            		label: '开启'
				},
					{
					 value: '3',
            		label: '关闭'
				}
			],
			this.keystatus=[
				{
					value: '1',
            		label: '全部'
				},
					{
					 value: '2',
            		label: '激活'
				},
					{
					 value: '3',
            		label: '失效'
				}
			],
			this.tableData=  [{
		             date: '2016-05-02',
		             name: '王小虎',

		              address: '上海市普陀区金沙江路 1518 弄'
	        		  }, {
	          		  date: '2016-05-04',
	          		  name: '王小虎',
	          		  address: '上海市普陀区金沙江路 1517 弄'
	         		 }, {
	         		   date: '2016-05-01',
	         		   name: '王小虎',
	         		   address: '上海市普陀区金沙江路 1519 弄'
	         		 }, {
	         		   date: '2016-05-03',
	         		   name: '王小虎',
	         		   address: '上海市普陀区金沙江路 1516 弄'
	          }]
		}
	}
}
</script>
<style type="text/css">
    .basic-top{
	height: 50px;
	border-bottom: 1px dashed#333;
    }
	.basic-top p {
		display: block;
		float: left;
		line-height: 50px;

	}
	.basic-top span {
		display: block;
		float: left;
		line-height: 50px;
		margin-left: 20px;

	}
	.basic-top-left,.basic-top-right{
		float: left;
		height: 100%;
		box-sizing: border-box;
		padding-left: 20px;
	}
	.basic-top-right{
		margin-left: 100px;
	}
	.basic-table-top{
		height: 80px;
		box-sizing: border-box;
		padding: 20px;
	}
	.basic-table{
		margin-top: 20px;
	}
	.basic-data{
		float: left;
	}
	.basic-search{
		height: 80px;
		float: right;
	}
	.basic-ipt{
		float: right;
	}
	.basic-btn{
		float: right;
	}
	.basic-table-tab{
		height: 100px;
		background: #F9F9F9;
	}
	.basic-table-kids{
		width: 20%;
		float: left;
		box-sizing: border-box;
		padding: 20px 0 20px 0;
	}
	.basic-wh{
		width: 100px;
	}

</style>