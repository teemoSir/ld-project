<template>
	<div>
		<div class="devaudit-top">
			<dataPicker class="devaudit-datapicker"></dataPicker>
			<el-button type="primary" class="devaudit-btn">搜索</el-button>
				<div class="devaudit-ipt">
				<el-input v-model="input" placeholder="请输入用户名称/key"></el-input>
				</div>
		</div>
		<div class="devaudit-tab">
			<div class="devaudit-table-kids">
				<span>审核状态</span>
				 <el-select v-model="status" class="devaudit-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in auditdata" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="devaudit-table-kids">
				<span>类型</span>
				 <el-select v-model="status1" class="devaudit-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in audittype" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
		</div>
		<div class="devaudit-table">
			<el-table
		      :data="tableData"
		      style="width: 100%"
		      border 
		      >
		       <el-table-column
		        prop="type"
		        label="开发者类型">
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="联系人姓名"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="tel"
		        label="手机号码"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="company"
		        label="公司名称">
		      </el-table-column>
		        <el-table-column
		        prop="introduction"
		        label="简介">
		      </el-table-column>
		        <el-table-column
		        prop="stutas"
		        label="审核状态">
		      </el-table-column>
		        <el-table-column
		        prop="subdata"
		        label="提交日期">
		      </el-table-column>
		        <el-table-column
		        prop="describe"
		        label="开发者详情">
		      </el-table-column>
		       
		     

		    </el-table>
		</div>
	</div>
</template>

<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"
export default{
	name:"devaudit",
	data(){
		return{
			input:'',
			status1:'',
			status:'',
			auditdata:'',
			audittype:'',
			tableData:[],
		}
	},
	components:{
		dataPicker,
	},
	created(){
		this.getauditdata()
	},
	methods:{
		getauditdata:function(){
			this.auditdata=[
				{
					value: '1',
            		label: '全部'
				},
				{
					value: '2',
            		label: '审核通过'
				},
				{
					value: '3',
            		label: '待审核'
				},
				{
					value: '4',
            		label: '审核未通过'
				}
			],
			this.audittype=[
				{
					value: '1',
            		label: '全部'
				},
				{
					value: '2',
            		label: '个人开发者'
				},
				{
					value: '3',
            		label: '企业开发者'
				}
			]
		}
	}
}
</script>
<style type="text/css">
	.devaudit-top{
	height: 90px;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
}
.devaudit-datapicker{
	float: left;
}
.devaudit-ipt{
	width: 200px;
	float: right;
}
.devaudit-btn{
	float: right;
}
.devaudit-tab{
	width: 100%;
	height: 100px;
	background: #F9F9F9;
	box-sizing: border-box;
	padding: 20px;
}
.devaudit-table-kids{
	width: 20%;
	float: left;
}
.devaudit-wh{
	width: 120px;
}

</style>