<template>
	<div>
		<div class="sdkaudit-top">
			<dataPicker class="sdkaudit-datapicker"></dataPicker>
			<el-button type="primary" class="sdkaudit-btn">搜索</el-button>
				<div class="sdkaudit-ipt">
				<el-input v-model="input" placeholder="请输入用户名称/key"></el-input>
				</div>
		</div>
		<div class="sdkaudit-tab">
			<div class="sdkaudit-table-kids">
				<span>审核状态</span>
				 <el-select v-model="status" class="sdkaudit-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in auditdata" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="sdkaudit-table-kids">
				<span>应用类型</span>
				 <el-select v-model="status1" class="sdkaudit-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in audittype" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
			<div class="sdkaudit-table-kids">
				<span>key状态</span>
				 <el-select v-model="status2" class="sdkaudit-wh" clearable placeholder="全部">
		        	<el-option v-for="childs in auditstatus" :key="childs.value" :label="childs.label" :value="childs.value">
		        </el-option>
		      </el-select>
			</div>
		</div>
		<div class="sdkaudit-table">
			<el-table
		      :data="tableData"
		      style="width: 100%"
		      border 
		      >
		       <el-table-column
		        prop="name"
		        label="应用名称">
		      </el-table-column>
		      <el-table-column
		        prop="type"
		        label="应用类型"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="note"
		        label="备注"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="key"
		        label="key">
		      </el-table-column>
		        <el-table-column
		        prop="creatdata"
		        label="申请日期">
		      </el-table-column>
		        <el-table-column
		        prop="stutas"
		        label="审核状态">
		      </el-table-column>
		        <el-table-column
		        prop="keystatus"
		        label="key状态">
		      </el-table-column>
		        <el-table-column
		        prop="describe"
		        label="详细信息">
		      </el-table-column>
		       
		     

		    </el-table>
		</div>
	</div>
</template>

<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"
export default{
	name:"sdkaudit",
	data(){
		return{
			input:'',
			status1:'',
			status:'',
			status2:'',
			auditdata:'',
			audittype:'',
			tableData:[],
			auditstatus:'',
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
			],
			this.auditstatus=[
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
			]
		}
	}
}
</script>
<style type="text/css">
	.sdkaudit-top{
	height: 90px;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
}
.sdkaudit-datapicker{
	float: left;
}
.sdkaudit-ipt{
	width: 200px;
	float: right;
}
.sdkaudit-btn{
	float: right;
}
.sdkaudit-tab{
	width: 100%;
	height: 100px;
	background: #F9F9F9;
	box-sizing: border-box;
	padding: 20px;
}
.sdkaudit-table-kids{
	width: 20%;
	float: left;
}
.sdkaudit-wh{
	width: 120px;
}

</style>