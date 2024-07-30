import router from '@/router/index'
import axios from 'axios'
/*======验证是否是登录状态====*/

// if(isdev){
//     let ouc = {
//       oauth2User:"http://user.ishowchina.com/ouc/userInfo?isAjax=true"
//   }
// };
//http request 拦截器
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限

        // if (store.state.token) {  // 通过vuex state获取当前的token是否存在
        //     next();
        // }
        // else {
        //     next({
        //         path: '/login',
        //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //     })
        // }
    }
    else {
        next();
    }
})
axios.interceptors.request.use(
  config => {

    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errNo === 0) {
      return response;
    }else if (response.data.errNo === 2000) {
      
      router.replace({
        name: 'login',
        path: '/login'
        // query: { redirect: router.currentRoute.fullPath }
      })
    } 
      return response;

  },
  error => {
    if (error.response) {

    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  });

