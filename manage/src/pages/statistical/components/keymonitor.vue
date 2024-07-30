<template>
	<div class="keymonitor">
		<div class="keymonitor-tab">
			<router-link to="/statistical/keymonitor/Basic" class="keymonitor-tab-btn">
				<el-button type="primary" plain >基础版</el-button>
			</router-link>
			<router-link to="/statistical/keymonitor/professional" class="keymonitor-tab-btn">
			    <el-button type="primary" plain >专业版</el-button>
		   </router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<style type="text/css">
	.keymonitor-tab{
		height: 50px;
		border-bottom: 1px solid #DDDDDD;
	}
	.keymonitor-tab-btn{
		float: left;
		margin-left: 20px;

	}
</style>