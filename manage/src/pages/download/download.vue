<template>
	<div class="download">
		<div class="download-top">
			<dataPicker class="download-dataPicker"></dataPicker>
			<el-button type="primary" class="download-btn">搜索</el-button>
				<div class="download-ipt">
				<el-input v-model="input" placeholder="请输入用户名称/key"></el-input>
				</div>
		</div>
			<div class="download-router">
				<router-view class=""></router-view>
				
			</div>
			
	
	</div>
</template>
<script type="text/javascript">
import dataPicker from "@/components/datatime/datatime.vue"
export default{
	name:'download',
	data(){
		return{
			input:'',
		}
	},
	components:{
		dataPicker,
	},

}
</script>
<style type="text/css">
.download{
	width: 100%;
	height: 100%;
}
.download-top{
	height: 50px;
	width: 100%;
}
	.download-dataPicker{
		float: left;
	}
	.download-btn{
		float: right;
	}
	.download-ipt{
		width: 200px;
		float: right;
	}
	.download-router{
		width: 100%;
		height: calc(100% - 50px);
	}
</style>