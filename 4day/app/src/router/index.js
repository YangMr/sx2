import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import stroage from "../utils/stroage.js"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
	path: '/login',
	name: 'login',
	component: Login
  },
  {
    path: '/about',
    name: 'about',
	meta : {
		auth : true
	},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to,form,next)=>{
	if(to.path == "/"){
		next()
	}else{
		if(to.meta.auth){
			const token = stroage.getLocalStroageData("token");
			if(token){
				next()
			}else{
				next("/")
			}
		}
	}
	

})

export default router
