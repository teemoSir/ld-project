<template>
	<div>
		
		<div class="appdown-tab">
			<div class="appdown-table-kids">
				<span>状态</span>
				 <el-select v-model="status" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in appdowntype" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="appdown-table-kids">
				<span>用户名</span>
				 <el-select v-model="status1" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in appdownusename" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="appdown-table-kids">
				<span>产品</span>
				 <el-select v-model="status2" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in appdownproduct" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="appdown-table-kids">
				<span>平台</span>
				 <el-select v-model="status3" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in appdownplatform" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
				<div class="appdown-table-kids">
				<span>版本</span>
				 <el-select v-model="status4" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in version" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="appdown-table-kids">
				<span>版本</span>
				 <el-select v-model="status5" class="down-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in downfrom" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
		</div>
		<div class="appdown-tab-btn">
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
		        prop="usename"
		        label="用户名"
		        >
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
		        prop="from"
		        label="下载来源">
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
		name:'appdown',
		data(){
			return{
				status:'',
				appdowntype:[],
				status1:'',
				status2:'',
				status3:'',
				status4:'',
				status5:'',
				appdownusename:[],
				appdownproduct:[],
				appdownplatform:[],
				version:[],
				downfrom:[],
				tableData:[],
			}
		},
		created(){
			this.getopenData()
		},
		methods:{
			getopenData:function(){
				this.appdowntype=[
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
				this.appdownusename=[
					{
						value: '1',
	            		label: '全部'
					},
				],
				this.appdownproduct=[
						{
						value: '1',
	            		label: '全部'
					},
				],
				this.appdownplatform=[
						{
						value: '1',
	            		label: '全部'
					},
				],
				this.version=[
					{
						value: '1',
	            		label: '全部'
					},
				]
				this.downfrom=[
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
	.appdown-tab{
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		padding: 20px;
		background: #F9F9F9;
	}
	.appdown-table-kids{
		width: 16%;
		float: left;
	}
	.down-wh{
		width: 100px;
	}
	.switchbtn{
		float: left;
		margin-left: 20px;
	}
	.appdown-tab-btn{
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		padding: 20px;
	}
</style>