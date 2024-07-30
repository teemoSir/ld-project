<template>
  <div class="components-container">
    <!-- <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。</div> -->
   <!--  <button @click="getUEContent()">获取内容</button> -->
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
    </div>
   <el-button type="primary" plain class="sure-btn" @click="getUEContent()">发送邮件</el-button>

  </div>
</template>
<style>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>
<script>
  import UE from '@/components/common/ue.vue';
  export default {
    components: {UE},
    data() {
      return {
        defaultMsg: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        }
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '发送成功',
          message: content,
          type: 'success'
        });
     
      }
    }
  };
</script>
<style type="text/css">
.sure-btn{
	float: left;
  width: 100px;
}

</style>