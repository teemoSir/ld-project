<template>
	<div class="take-massages">
		<div class="take-massages-nav">
			<p>请输入短信编号:</p>
			<el-input v-model="input" placeholder="请输入内容" class="takeMessage-ipt"></el-input>
			
		</div>
		<el-button class="send-message">发送短信</el-button>
		<p class="prompt">(发送给所有手机用户)</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"messages",
		data(){
			return{
				input:"",
			}
		},

	}
</script>

<style type="text/css">
.take-massages{
	border:1px solid #DFDFDF;
	height: 150px;
	padding: 5px;
}
	.take-massages-nav{
		height: 60px;
		padding: 10px
	}
	.take-massages p{
		display: block;
		float: left;
		padding: 10px;
		box-sizing: border-box;
	}
	.takeMessage-ipt{
		width: 200px;
		float: left;
	}
	.send-message{
		float:left;
		margin-left: 10px;
		

	}
	.prompt{
		color: red;
		font-size: 12px;
	}

</style>