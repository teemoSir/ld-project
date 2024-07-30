<template>
	<div class="userActive">
		<div class="userActive-top">
			<el-button type="primary" class="userActive-btn">昨天</el-button>
			<el-button type="primary" plain class="userActive-btn">最近7天</el-button>
			<el-button type="primary" plain class="userActive-btn">最近30天</el-button>
			<dataPicker class="dt"></dataPicker>
		</div>
		<div class="show-board">
			<span>用户总量</span>
			<p>dddd</p>
			<div class="show-board-data">
				<span>昨日相比</span>
				<span>33%</span>
			</div>
	
		</div>
		<div class="active-tab-btn">
			<el-button type="primary" plain>活跃用户</el-button>
			<el-button type="primary" plain>新增用户</el-button>
		</div>

		<div class="active-charts">
		 <div id="active-charts" style="width:80% ;height: 500px;"></div>

		</div>

	</div>
</template>

<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"
import echarts from 'echarts'

export default{
	name:"",
	data(){
		return{
			charts: '',
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
                this.drawLine('active-charts')
            })
        }
}
	

</script>
<style type="text/css">
.userActive{
	width: 100%;
	height: 100%;
}
	.userActive-top{
		height: 70px;
	}
	.userActive-btn{
		float: left;
	}
	.show-board{
		width: 300px;
		height: 100px;
		background: #3DBABA;
		color: #fff;
	}
	.show-board{
		box-sizing: border-box;
		padding: 10px;
	}
	.dt{
		float: left;
		margin-left: 30px;
	}
	.active-tab-btn{
		height: 70px;
		box-sizing: border-box;
		padding-top: 20px;
	}
	.el-button{
		float: left;
	}
	.show-board-data{
		height: 40px;
		line-height: 40px;
	}
	.active-charts{
		width: 100%;
		box-sizing: border-box;
		height: calc(100% - 240px);
	}
</style>