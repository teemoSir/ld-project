<template>
  <div class="block">
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="到"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>

</template>

<script>
  export default {
    name:"dataPicker",
    data() {
      return {

        value6: '',
        value7: ''
      };
    }
  };
</script>
<style type="text/css">

</style>