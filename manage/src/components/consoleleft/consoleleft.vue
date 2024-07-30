<template>
  <div class="statistical">
    <h3>过去七日统计</h3>
    <p>概要</p>
    <table class="statistical-table">
      <tr>
        <td></td>
        <td>普通用户</td>
        <td>个人开发者</td>
        <td>企业开发者</td>
        <td>全部用户</td>
      </tr>
      <tr>
        <td>过去七日新增</td>
        <td v-for="item in addData">{{item.count}}</td>
        <td></td>
      </tr>
      <tr>
        <td>过去七日活跃</td>
        <td v-for="item in activeData">{{item}}</td>
        <td></td>
      </tr>
      <tr>
        <td>总量统计</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <p>数据趋势</p>
    <div class="chasts-left">
      <div id="main-left" style="width:100% ;height: 300px;"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
export default {
  name: 'eharts',
  data() {
    return {
      charts: '',
      addData: '',
      activeData: '',
    }
  },
  created() {

  },
  methods: {
    drawLine(id) {
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
    },

    getAddData() {
    	var sss = this.$moment().format('L');
    	debugger
      this.axios.get(this.config.usebase + "/authorization/user/statistics/userCount").then((res) => {
        if (res.status == 200) {
          let data = res.data.results;
          this.addData = data;
        }
      })

    },
    getActive() {
      this.axios.get(this.config.statisBase + "/statistics/userActive").then((res) => {
        if (res.status == 200) {
          let data = res.data.results.objectList;
          if (data.length == 0) {
            this.activeData = [0, 0, 0]
            return
          } else {
            this.activeData = data;

          }
        }
      });
    },
     getAllCount() {
      this.axios.get(this.config.statisBase + "/authorization/user/statistics/userCount").then((res) => {
      	debugger
        if (res.status == 200) {
          let data = res.data.results.objectList;
          debugger
   
        }
      })
    },
  },

  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine('main-left')
    });
    this.getAddData()
    this.getActive()
    this.getAllCount()


  },
}

</script>
<style type="text/css">
.statistical-table {
  width: 100%;
}

.statistical h3 {
  display: block;
  text-align: left;
  font-size: 24px;
}

.statistical p {
  text-align: left;
  background: #F2F2F2;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
}

.statistical-table {
  border-collapse: collapse;
  border-spacing: 0;
}

.statistical-table td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 12px;
}

.chasts-left {
  width: 100%;
  /*height: 200px;*/
  border: 1px solid #F2F2F2;
  ;
  box-sizing: border-box;
}

</style>
 