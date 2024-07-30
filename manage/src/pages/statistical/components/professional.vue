<template>
	<div>
		<div class="prefess">
			<dataPicker class="prefess-dataPicker"></dataPicker>
				<el-button type="primary" class="prefess-btn">搜索</el-button>

			<div class="prefess-top">
				<el-input v-model="input" placeholder="请输入用户名称/key" class="prefess-ipt"></el-input>
			</div>
		</div>
		<div class="prefess-select">
			<div class="prefess-table-kids">
				<span>应用类型</span>
				 <el-select v-model="status" class="prefess-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in prefessUsedType" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="prefess-table-kids">
				<span>白名单控制</span>
				 <el-select v-model="status1" class="prefess-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in whiteLists" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
				<div class="prefess-table-kids">
				<span>key状态</span>
				 <el-select v-model="status2" class="prefess-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in keystatus" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
		</div>
			<div class="prefess-table">
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
		        label="备注">
		      </el-table-column>
		        <el-table-column
		        prop="limit"
		        label="终端/协议数">
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
export default{
	name:"prefess",
	data(){
		return{
			input:'',
			status:'',
			status1:'',
			status2:'',
			prefessUsedType:'',
			whiteLists:'',
			keystatus:'',
			tableData:'',

		}
	},
	created(){
		this.getData();
	},
	components:{
		dataPicker,
	},
	methods:{
		getData:function(){
			this.prefessUsedType=[
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
			this.whiteLists=[
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
			this.tableData=[
				{
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
	          }
			]
		}

	}
}

</script>
<style type="text/css">
	.prefess{
		height: 90px;
		padding: 20px;
		box-sizing: border-box;
	}
	.prefess-dataPicker{
		float: left;
	}
	.prefess-btn{
		float: right;
	}
	.prefess-top{
		width:200px; 
		float: right;
	}
	.prefess-ipt{
		float: right;
	}
	.prefess-select{
		width: 100%;
		height: 100px;
		box-sizing: border-box;
		background: #F9F9F9;
		padding: 30px;
	}
	.prefess-table-kids{
		width: 20%;
		float: left;
	}
	.prefess-wh{
		width: 100px;
	}
	.prefess-table{
		margin-top: 20px;
	}
</style>