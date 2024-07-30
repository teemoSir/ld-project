<template>
	<div>
		<div class="search-ipt">
			<el-input v-model="input" placeholder="请输入用户名/手机号/邮箱"></el-input>
			
		</div>
		<div class="search-btn">
		<el-button type="primary">搜索</el-button>
			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"search",
		data() {
			return{
				input:""
			}
		}
	}

</script>
<style type="text/css">
	.search-ipt{
		float: left;
	}
	.search-btn{
		float: right;
	}
</style>