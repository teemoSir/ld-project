<template>
	<div class="key-view">
		<div class="key-view-title">概要</div>
		<div class="key-view-wdw">
			<div class="key-view-wdw-kids">
				<p>累计key</p>
				<p>1111</p>
			</div>
			<div class="key-view-wdw-kids">
				<p>过去7日新增</p>
				<p>1111</p>
			</div>
			<div class="key-view-wdw-kids">
				<p>过去30日新增</p>
				<p>1111</p>
			</div>
			<div class="key-view-wdw-kids">
				<p>过去7日活跃</p>
				<p>1111</p>
			</div>
			<div class="key-view-wdw-kids">
				<p>过去30日活跃</p>
				<p>1111</p>
			</div>

		</div>
		<div class="key-view-tab">
			<span> 数据趋势</span>
			<el-button type="primary" plain class="key-view-tab-btn">昨天</el-button>
			<el-button type="primary" plain class="key-view-tab-btn">最近7天</el-button>
			<el-button type="primary" plain class="key-view-tab-btn">最近30天</el-button>
			<dataPicker clas="keydataPicker" ></dataPicker>
		</div>
		<div class="key-view-charts">
			<div class="key-view-charts-tab">
					<el-button type="primary" plain class="key-view-charts-btn">新增key</el-button>
					<el-button type="primary" plain class="key-view-charts-btn">活跃key</el-button>

					<el-button type="primary" plain class="key-view-charts-btn">调用次数</el-button>
					<el-button type="primary" plain class="key-view-charts-btn">累计key</el-button>
			</div>
					<div id="key-view-charts"></div>
			
			
		</div>
		<div class="key-view-title key-view-title-2 ">数据明细</div>
		<div class="key-view-table" >
			  <el-table
			      :data="tableData"
			      class="key-view-maintable"
			      style="width: 100%">
			      <el-table-column
			        prop="date"
			        label="日期"
			        >
			      </el-table-column>
			      <el-table-column
			        prop="newkey"
			        label="新增key"
			       >
			      </el-table-column>
			      <el-table-column
			        prop="activekey"
			        label="活跃key">
			      </el-table-column>
			       <el-table-column
			        prop="usedsum"
			        label="调用次数">
			      </el-table-column>
			        <el-table-column
			        prop="keysum"
			        label="累计key">
			      </el-table-column>
			    </el-table>
		</div>
		
	</div>
</template>
<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"
import echarts from 'echarts'
export default{
	name:'',
	data(){
		return{
			charts: '',
		 tableData: [{
            date: '2016-05-02',
            newkey: '王小虎',
            activekey: '上海市普陀区金沙江路 1518 弄',
            usedsum:"77",
            keysum:"88"
          }, {
           date: '2016-05-02',
            newkey: '王小虎',
            activekey: '上海市普陀区金沙江路 1518 弄',
            usedsum:"77",
            keysum:"88"

          }, {
            date: '2016-05-02',
            newkey: '王小虎',
            activekey: '上海市普陀区金沙江路 1518 弄',
            usedsum:"77",
            keysum:"88"



          }, {
            date: '2016-05-02',
            newkey: '王小虎',
            activekey: '上海市普陀区金沙江路 1518 弄',
            usedsum:"77",
            keysum:"88"

          }]
		}
	},
	components:{
		dataPicker,
	},
		  methods:{
            drawLine(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                   xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				    },
				    yAxis: {
				        type: 'value'
				    },
                 series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320],
			        type: 'line'
			    }]
               })
            }
        },
            mounted(){
            this.$nextTick(function() {
                this.drawLine('key-view-charts')
            })
        }
}
</script>
<style type="text/css">
	.key-view{
		width: 100%;
		box-sizing: border-box;
		height: 100%;
		padding-bottom: 50px;
	}
	.key-view-title{
		width: 100%;
		box-sizing: border-box;
		height: 50px;
		background: #F2F2F2;
		padding: 10px;
		text-align: left;
		border:1px solid #CCCCCC;
		border-radius: 5px 5px  0 0;
	}
	.key-view-tab{
		width: 100%;
		box-sizing: border-box;
		height: 50px;
		background: #F2F2F2;
		padding: 5px 10px;
		border:1px solid #CCCCCC;
		border-radius: 5px 5px  0 0;
	}

	.key-view-tab{
		margin-top: 20px;
	}
	.key-view-tab span{
		display: block;
		float: left;

	}
	.key-view-tab-btn{
		float: left;
		margin-left: 200px;
	}
	.keydataPicker{
		float: left;

	}
	.key-view-wdw{
		width: 100%;
		height: 100px;
	}
	.key-view-wdw-kids{
		width: 20%;
		box-sizing: border-box;
		height: 100%;
		float: left;
		border:1px solid #CCCCCC;
		/*padding-top: 20px;*/
	}
	.key-view-wdw-kids p{
		height: 50px;
		line-height: 50px;

	}
	.key-view-charts{
		width: 100%;
		height: 400px;
		border:1px solid #cccccc;
	}
	.key-view-charts-tab{
		width: 100%;
		height: 80px;
		padding: 20px;
		box-sizing: border-box;
	}
	.key-view-charts-btn{
		float: left;

	}
	#key-view-charts{
		width: 100%;
		height: calc(100% - 90px);
	}
	.key-view-title-2{
		margin-top: 20px;
	}
	.key-view-maintable th div{
		text-align: center;
	}
</style>