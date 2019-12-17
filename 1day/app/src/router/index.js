import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import List from '@/views/List'
import Card from '@/views/Card'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path : "/",
      component : Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/card',
      meta : {
        auth: true
      },
      name: 'card',
      component: Card
    }
  ]
});

router.beforeEach((to,from,next)=>{
  //判断本地有没有token，如果有token，则表示是登录状态，如果没有，则表示没有登录
  const isLogin = localStorage.getItem("token") ? true : false;
  //判断路由里面meta属性的auth为true的这个进入页面是否需要登录
  if(to.meta.auth){
    //如果登录了，则直接进行跳转，如果没有登录，则直接跳转到登录页面
    if(isLogin){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})

// router.beforeEach((to,from,next)=>{
//   const isLogin = localStorage.getItem("token") ? true : false;
//   // if(to.meta.auth){
//   //   if(isLogin){
//   //     next()
//   //   }else{
//   //     next("/login")
//   //   }
//   // }
//
//   //
//   // if(to.path == "/login" || to.path == "/register"){
//   //   next();
//   // }else{
//   //   isLogin ? next() : next("/login")
//   // }
//
// })

export default router;
