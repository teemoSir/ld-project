<template>
	<div>
		<div class="management-top">
				<el-button type="primary" class="management-btn">搜索</el-button>
				<div class="management-ipt">
				<el-input v-model="input" placeholder="请输入用户名称/key"></el-input>
				</div>
		</div>
		<div class="management-select">
			<div class="management-table-kids">
				<span>状态</span>
				 <el-select v-model="status1" class="management-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in choseData" :key="childs.value" :label="childs.label" :value="childs.value">
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
		        prop="data"
		        label="提交日期">
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="用户名"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="managementname"
		        label="需求名称"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="describe"
		        label="详细描述">
		      </el-table-column>
		        <el-table-column
		        prop="willdata"
		        label="期望上线日期">
		      </el-table-column>
		        <el-table-column
		        prop="customer"
		        label="联系人">
		      </el-table-column>
		        <el-table-column
		        prop="compony"
		        label="公司">
		      </el-table-column>
		        <el-table-column
		        prop="tel"
		        label="手机">
		      </el-table-column>
		       
		        <el-table-column
		        prop="mail"
		        label="邮箱">
		      </el-table-column>
		       <el-table-column
		        prop="status"
		        label="状态">
		      </el-table-column>

		    </el-table>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	 name:'management',
	 data(){
	 	return{
	 		input:'',
	 		status1:'',
	 		choseData:[],
	 		tableData:[],
	 	}
	 },
	 created(){
	 	this.getchosedata();
	 },
	 methods:{
	 	getchosedata:function(){
	 		this.choseData=[
	 			{
					value: '1',
            		label: '全部'
				},
					{
					 value: '2',
            		label: '未处理'
				},
					{
					 value: '3',
            		label: '已联系'
				},
				{
					 value: '4',
            		label: '已交付'
				}
	 		],
	 		this.tableData=[

	 		]
	 	}
	 }
	}
</script>

<style type="text/css">
	.management-top{
		width: 100%;
		height: 50px;
	}
	.management-ipt{
		width: 200px;
		float: right;
	}
	.management-btn{
		float: right;
	}
	.management-select{
		height: 90px;
		background: #F9F9F9;
		box-sizing: border-box;
		padding: 20px;
	}
	.management-table-kids{
		width: 20%;
		float: left;
	}
	.management-wh{
		width: 100px;
	}
	
</style>