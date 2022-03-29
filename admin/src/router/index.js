import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Main from '../views/Main.vue'

Vue.use(VueRouter)

const Main = () => import('../views/Main')
const SystemEdit = () => import('../views/system/SystemEdit')
const SystemList = () => import('../views/system/SystemList')

const Login = () => import('../views/Login')
const Register = () => import('../views/Register')

const Audit = () => import('../views/pub/audit.vue')
const Manage = () => import('../views/pub/manage.vue')

const Tool = () => import('../views/tools/tool.vue')
const UserList = () => import('../views/system/userList.vue')

const routes = [
	{
		path:'/login',
		name:'Login',
		component:Login,
		meta:{isPublic:true}
	},
	{
		path:'/register',
		name:'Register',
		component:Register,
		meta:{isPublic:true}
	},
	{
		path: '/',
		name: 'Main',
		component: Main,
		children: [
			/* :id需要动态传递参数,同this.$routers.params。 搭配组件中 props:{id:{}} */
			{
				path: '/pub/audit',
				component: Audit
			},
			{
				path: '/pub/manage',
				component: Manage
			},
			{
				path: '/tools',
				component: Tool
			},
			{
				path: '/systems/create',
				component: SystemEdit
			},
			{
				path: '/systems/list',
				component: SystemList
			},
			{
				path: '/systems/userlist',
				component: UserList
			}
		]
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

// 前置导航守卫 路由原信息
/* 
 to 即将要去哪
 from 来自哪
 next 要不要进去，做什么处理
 */
router.beforeEach((to,from,next)=>{
	// console.log('to',to)
	// 没有meta的 isPublic  没有token 的情况下跳到登录页
	if(!to.meta.isPublic && !localStorage.token){
		return next('/login')
	}
	next()
})

export default router
