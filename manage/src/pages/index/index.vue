<template>
	<div class="consoleData">
		<div class="console-left">
			<consoleleft/>
		</div>
		<div class="console-right">
			<consoleright/>
		</div>


	</div>
	
</template>
<script type="text/javascript">
import consoleleft from '../../components/consoleleft/consoleleft.vue';
import consoleright from '../../components/consoleright/consoleright.vue';

export default {
  name: 'view-console',
  data () {
    return {};
  },
  mounted() {
  },
  components:{
    consoleleft,
    consoleright,
    
  }
};
</script>>
<style type="text/css">
	.console-left{
		/*border:1px solid#222;*/
		float: left;
		width: 48%;
		box-sizing: border-box;
		margin-left: 20px;

	}
	.console-right{
		/*border:1px solid red;*/
		float: right;
		width: 48%;
		box-sizing: border-box;

	}
</style>