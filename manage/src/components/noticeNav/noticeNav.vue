<template>
  <div class="navTip">
    <div class="navStatus" v-if="userStatus.length>0">
      <span>{{userStatus[0].title+"："}}</span>
      <el-select v-model="status" class="main-wh" clearable placeholder="请选择" @change="statusChange" >
        <el-option v-for="childs in userStatus[0].childs" :key="childs.value" :label="childs.label" :value="childs.value">
        </el-option>
      </el-select>
    </div>
    <div class="navStatus" v-if="userType.length>0">
      <span>{{userType[0].title+"："}}</span>
      <el-select v-model="status2" class="type-wh" clearable placeholder="请选择" @change="statusChange">
        <el-option v-for="childs in userType[0].childs" :key="childs.value" :label="childs.label" :value="childs.value">
        </el-option>
      </el-select>
    </div>
     <div class="navStatus" v-if="source.length>0">
      <span>{{source[0].title+"："}}</span>
      <el-select v-model="status3"  clearable placeholder="请选择" @change="statusChange">
        <el-option v-for="childs in source[0].childs" :key="childs.value" :label="childs.label" :value="childs.value">
        </el-option>
      </el-select>
    </div>
     <div class="navStatus" v-if="development.length>0">
      <span>{{development[0].title+"："}}</span>
      <el-select v-model="status4"  class="width_" clearable placeholder="请选择" @change="statusChange">
        <el-option v-for="childs in development[0].childs" :key="childs.value" :label="childs.label" :value="childs.value">
        </el-option>
      </el-select>
    </div>
     <div class="navStatus " v-if="partners.length>0">
      <span>{{partners[0].title+"："}}</span>
      <el-select v-model="status5" class="max-wh" clearable placeholder="请选择" @change="statusChange">
        <el-option v-for="childs in partners[0].childs" :key="childs.value" :label="childs.label" :value="childs.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import bus from '@/components/bus/bus.js'
export default {
  name: "noticeNav",
  data() {
    return {
      userStatus: [],
      userType:[],
      source:[],
      development:[],
      partners:[],
      status: '',
      status2: '',
      status3: '',
      status4:"",
      status5:"",
    }
  },
  mounted() {},
  created() {
    this.assignment();
    this.getType();
    this.registeredSource();
    this.developmentType();
    this.partnersType();

  },
  methods: {
    statusChange() {
      // bus.$emit('searchDataChange',{'status1':this.status1,'status2':this.status2})
      this.$emit('searchDataChange', { 'status': this.status, 'status2': this.status2 })
    },
    assignment() {
      this.userStatus = [{
        title: "状态",
        childs: [{

            value: '1',
            label: '全部'
          },
          {
            value: '2',
            label: '激活'
          },
          {
            value: '3',
            label: '失效'
          },

        ]
      }]
    },
    getType() {
      this.userType = [{
        title: "用户类型",
        childs: [{
            value: '1',
            label: '全部'
          },
          {
            value: '2',
            label: '普通用户'
          },
          {
            value: '3',
            label: '管理员'
          },
        ]

      }]
    },
    registeredSource(){
      this.source=[{
        title: "注册来源",
        childs: [{
            value: '1',
            label: '全部'
          },
          {
            value: '2',
            label: '普通用户'
          },
          {
            value: '3',
            label: '管理员'
          },
        ]

      }]
    },
    developmentType(){
      this.development=[{
        title: "开发者类型",
        childs: [{
            value: '1',
            label: '全部'
          },
          {
            value: '2',
            label: '非开发者'
          },
          {
            value: '3',
            label: '个人开发者'
          },
            {
            value: '4',
            label: '企业开发者'
          },
        ]

      }]
    },
    partnersType(){
      this.partners=[{
        title: "开发者类型",
        childs: [{
            value: '1',
            label: '开发者合作伙伴'
          },
          {
            value: '2',
            label: '私有云合作伙伴'
          },
          {
            value: '3',
            label: '解决方案合作伙伴'
          },
            {
            value: '4',
            label: '数据共享合作伙伴'
          },
        ]

      }]
    }
  }
}

</script>
<style type="text/css">
.navTip li {
  float: left;
  margin-left: 5px;
}

.el-select {
  width: 100px;
  margin-left: 5px;
}
.main-wh{
  width: 80px;
}
.type-wh{
  width: 110px;
}
.max-wh{
  width: 11rem;
}
.width_{
  width: 110px;
}

.navStatus {
  float: left;
  margin-left: 20px;
}

</style>
