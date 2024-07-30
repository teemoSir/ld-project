<template>
	<div>
		<div class="feedback-top">
			<dataPicker class="feedback-dataPicker"></dataPicker>
				<el-button type="primary" class="feedback-btn">搜索</el-button>
				<div class="feedback-ipt">
				<el-input v-model="input" placeholder="请输入用户名称/key"></el-input>
				</div>
		</div>
		
		<div class="feedback-tab">
			<div class="feedback-table-kids">
				<span>状态</span>
				 <el-select v-model="status" class="feedback-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in feedbackstatus" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="feedback-table-kids">
				<span>用户名</span>
				 <el-select v-model="status1" class="feedback-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in feedbackfrom" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			
		</div>
			<div class="feedback-table">
			<el-table
		      :data="tableData"
		      style="width: 100%"
		      border 
		      >
		       <el-table-column
		        prop="usename"
		        label="用户名">
		      </el-table-column>
		      <el-table-column
		        prop="tel"
		        label="联系方式"
		        >
		      </el-table-column>
		      <el-table-column
		        prop="from"
		        label="来源"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="version"
		        label="版本">
		      </el-table-column>
		        <el-table-column
		        prop="feedbackmessage"
		        label="反馈信息">
		      </el-table-column>
		     
		        <el-table-column
		        prop="status"
		        label="状态">
		      </el-table-column>
		       <el-table-column
		        prop="feedbacktime"
		        label="反馈日期">
		      </el-table-column>
		        <el-table-column
		        prop="operation"
		        label="操作">
		      </el-table-column>
		    </el-table>
		</div>
	</div>
</template>
<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"

	export default{
		name:'appdown',
		data(){
			return{
				input:'',
				status:'',
				status1:'',
				tableData:[],
				feedbackstatus:[],
				feedbackfrom:[],
			}
		},
		components:{
				dataPicker,
		},
		created(){
			this.getopenData()
		},
		methods:{
			getopenData:function(){
				this.feedbackstatus=[
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
	            		label: '已处理'
					}
				],
				this.feedbackfrom=[
					{
						value: '1',
	            		label: '全部'
					},
				]
				
			}
		}
	}
</script>
<style type="text/css">
.feedback-top{
	width: 100%;
	height: 50px;
}
.feedback-dataPicker{
	float: left;
}
.feedback-btn{
	float: right;
}
.feedback-ipt{
	width: 200px;
	float: right;
}
	.feedback-tab{
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		padding: 20px;
		background: #F9F9F9;
	}
	.feedback-table-kids{
		width: 16%;
		float: left;
	}
	
	.feedback-wh{
		width: 100px;
	}
	.feedback-table{
		margin-top: 20px;
	}
	
	
</style>