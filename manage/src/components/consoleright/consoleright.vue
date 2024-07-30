<template>
	
	<div class="statistical">
		<h3>过去七日服务访问总量</h3>
		<p>概要</p>
		<div class="statistical-sum">
			<div class="statistical-sum-left">
				<span>服务访问总量</span>
				<span></span>
			</div>
			<div class="statistical-sum-right">
				<span>昨日同比</span>
				<span></span>
			</div>
		</div>
		<p>数据趋势</p>
		<div class="chasts-right">
			 <div id="main-right" style="width: 100%;height: 300px;"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
	 export default {
        name: 'eharts',
        data () {
            return {
                charts: '',
            }
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
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawLine('main-right')
            })
        }
    }


</script>
<style type="text/css">
.statistical-table{
	width: 100%;
}
.statistical h3{
	display: block;
	text-align:left;
	font-size: 24px;
}
.statistical p{
	text-align: left;
	background: #F2F2F2;
	padding: 5px;
    border-radius: 5px 5px 0 0;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;


}
.statistical-sum{
	width: 100%;
	height: 135px;
}
.chasts-right{
	width: 100%;
	/*height: 200px;*/
	border:1px solid  #F2F2F2;
	box-sizing: border-box;
}
.statistical-sum-left{
	width: 50%;
	float: left;
	line-height: 135px;
	box-sizing: border-box;
	border:1px solid  #F2F2F2;
}
.statistical-sum-right{
	width: 50%;
	float: right;
	line-height: 135px;
	box-sizing: border-box;
	border:1px solid  #F2F2F2;
}
</style>