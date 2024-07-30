import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = resolve => require(['@/pages/home/home.vue'], resolve);
const index = resolve => require(['@/pages/index/index.vue'], resolve);
const download = resolve => require(['@/pages/download/download.vue'], resolve);
const feedback = resolve => require(['@/pages/feedback/feedback.vue'], resolve);
const userCtrl = resolve => require(['@/pages/userCtrl/userCtrl.vue'], resolve);
const userFind = resolve => require(['@/pages/userFind/userFind.vue'], resolve);
const userunder = resolve => require(['@/pages/userunder/userunder.vue'], resolve);
const takeMessage = resolve => require(['@/pages/userunder/components/takeMessage.vue'], resolve);
const takeEmil = resolve => require(['@/pages/userunder/components/takeEmil.vue'], resolve);
const analysis = resolve => require(['@/pages/useranalysis/Analysis.vue'], resolve);
const statistical = resolve => require(['@/pages/statistical/statistical.vue'], resolve);
const userserver = resolve => require(['@/pages/statistical/components/userserver.vue'], resolve);
const key = resolve => require(['@/pages/statistical/components/key.vue'], resolve);
const Basic = resolve => require(['@/pages/statistical/components/Basic.vue'], resolve);
const professional = resolve => require(['@/pages/statistical/components/professional.vue'], resolve);
const keymonitor = resolve => require(['@/pages/statistical/components/keymonitor.vue'], resolve);
const devaudit = resolve => require(['@/pages/audit/devaudit.vue'], resolve);
const sdkaudit = resolve => require(['@/pages/audit/sdkaudit.vue'], resolve);
const openPage = resolve => require(['@/pages/download/pages/open.vue'], resolve);
const appdown = resolve => require(['@/pages/download/pages/appdown.vue'], resolve);
const management = resolve => require(['@/pages/management/management.vue'], resolve);
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: "/index",
    children: [{
        path: '/index',
        name: 'index',
        component: index,
        //  meta: {
        //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        // },

      },
      {
        path: '/download/openPage',
        name: 'download',
        component: download,
        children: [{
            path: '/download/openPage',
            name: 'openPage',
            component: openPage,
          },
          {
            path: '/download/appdown',
            name: 'appdown',
            component: appdown,
          },

        ]
      },
      {
        path: '/feedback',
        name: 'feedback',
        component: feedback,
      },
      {
        path: '/statistical',
        name: 'statistical',
        component: statistical,
        children: [{
            path: '/statistical/userserver',
            name: 'userserver',
            component: userserver,
          },
          {
            path: '/statistical/key',
            name: 'key',
            component: key,
          },
          {
            path: '/statistical/keymonitor/Basic',
            name: 'keymonitor',
            component: keymonitor,
            children: [{
                path: '/statistical/keymonitor/Basic',
                name: 'Basic',
                component: Basic,
              },
              {
                path: '/statistical/keymonitor/professional',
                name: 'professional',
                component: professional,
              },
            ]
          },
        ],
        redirect: "/statistical/userserver",

      },

      {
        path: '/userCtrl',
        name: 'userCtrl',
        component: userCtrl,
        children: [{
            path: '/userCtrl/userFind',
            name: 'userFind',
            component: userFind,
          }, {
            path: '/userCtrl/userunder',
            name: 'userunder',
            component: userunder,
            children: [{
                path: "/userCtrl/userunder/takeMessage",
                name: 'takeMessage',
                component: takeMessage,
              },
              {
                path: "/userCtrl/userunder/takeEmil",
                name: 'takeEmil',
                component: takeEmil,
              },
            ],
            redirect: "/userCtrl/userunder/takeMessage",
          },
          {
            path: '/userCtrl/analysis',
            name: 'analysis',
            component: analysis,
          },
        ]
      },
      {
        path: '/management',
        name: 'management',
        component: management,
      },
      {
        path: '/audit/devaudit',
        name: 'devaudit',
        component: devaudit,
      },
      {
        path: '/audit/sdkaudit',
        name: 'sdkaudit',
        component: sdkaudit,
      },


    ]
  }]
})
