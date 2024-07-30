<template>
	<div>
		
		<div class="down-tab">
			<div class="down-table-kids">
				<span>状态</span>
				 <el-select v-model="status" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in openpagestype" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="down-table-kids">
				<span>用户名</span>
				 <el-select v-model="status1" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in username" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="down-table-kids">
				<span>产品</span>
				 <el-select v-model="status2" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in product" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="down-table-kids">
				<span>平台</span>
				 <el-select v-model="status3" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in platform" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
		</div>
		<div class="tab-btn">
			<router-link to="/download/openPage" class="switchbtn">
				<el-button type="primary">开放平台</el-button>
				
			</router-link>
			<router-link to="/download/appdown" class="switchbtn">
				<el-button type="primary">APP下载</el-button>
				
			</router-link>
		</div>
			<div class="devaudit-table">
			<el-table
		      :data="tableData"
		      style="width: 100%"
		      border 
		      >
		       <el-table-column
		        prop="data"
		        label="日期">
		      </el-table-column>
		      <el-table-column
		        prop="皮肉"
		        label="用户名"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="product"
		        label="产品"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="version"
		        label="版本">
		      </el-table-column>
		        <el-table-column
		        prop="sdk"
		        label="SDK">
		      </el-table-column>
		        <el-table-column
		        prop="sample"
		        label="示例代码">
		      </el-table-column>
		        <el-table-column
		        prop="notes"
		        label="文档">
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
	export default{
		name:'openpages',
		data(){
			return{
				status:'',
				openpagestype:[],
				status1:'',
				status2:'',
				status3:'',
				username:[],
				product:[],
				platform:[],
				tableData:[],
			}
		},
		created(){
			this.getopenData()
		},
		methods:{
			getopenData:function(){
				this.openpagestype=[
					{
						value: '1',
	            		label: '全部'
					},
					{
						value: '2',
	            		label: '成功'
					},
					{
						value: '3',
	            		label: '失败'
					}
				],
				this.username=[
					{
						value: '1',
	            		label: '全部'
					},
				],
				this.product=[
						{
						value: '1',
	            		label: '全部'
					},
				],
				this.platform=[
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
	.down-tab{
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		padding: 20px;
		background: #F9F9F9;
	}
	.down-table-kids{
		width: 20%;
		float: left;
	}
	.down-wh{
		width: 100px;
	}
	.switchbtn{
		float: left;
		margin-left: 20px;
	}
	.tab-btn{
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		padding: 20px;
	}
</style>