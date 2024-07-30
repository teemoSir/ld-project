<template>
	<div class="body">
		<v-head class="nav"></v-head>
		<div class="content">
			<div class="leftMenu">
				<leftMenu></leftMenu>
			</div>
			<div class="view-port">
				 <router-view/>
			</div>
			
		</div>

	</div>
</template>
<script type="text/javascript">
import head from '../../components/head/head.vue';
import menulist from '../../components/menu/menu.vue';
export default {
  components: {
    "v-head":head,
    "leftMenu":menulist,
  }
};


</script>
<style type="text/css">
	*{
		margin:0;
		padding: 0;
		list-style: none;
	}
	.body{
		height:100%;
		width: 90%;
		margin: 0 auto;
	}
	.nav{	
		height: 50px;
		line-height: 50px;
		background: #F8F8F8;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 10px
	}
	.content{
		height: calc(100% - 80px);
		overflow: hidden;
		box-sizing: border-box;
		margin-top: 20px;

	}
	.leftMenu{
		width: 200px;
		height: 100%;
		float: left;
	}
	.view-port{
		width: calc(100% - 200px);
		height: 100%;
		float: right;
		padding: 20px;
		/*padding-bottom:200px;*/

		box-sizing: border-box;
		overflow-y: auto;

	}

</style>
