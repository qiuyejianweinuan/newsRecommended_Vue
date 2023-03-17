import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Example from '../views/Example.vue'
import Test from '../views/test1.vue'
import CKEditor from "@/views/CKEditor.vue";
import NotFound from "@/views/common/404.vue"
import Register from "@/views/Register.vue";
import NewsInfo from "@/views/NewsInfo.vue";
import userLogin from "@/views/common/UserLogin.vue";
import userCenter from "@/views/user/userCenter.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {title: '新闻推荐系统'},
        },
        {
            path: '/404',
            component: NotFound,
            name: '404',
            meta: {title: '404未找到'}
        },
        {
            path: '/Example',
            name: 'example',
            component: Example
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/NewsInfo',
            name: 'newsInfo',
            component: NewsInfo,
            meta: { transition: 'slide-left' },
        },
        {
            path: '/CKEditor',
            name: 'CKEditor',
            component: CKEditor
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/userLogin',
            name: 'UserLogin',
            component: userLogin
        },
        {
            path: '/userCenter',
            name: 'userCenter',
            component: userCenter
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})
router.beforeEach((to, from, next)=>{
    if(to.matched.length === 0){　　　　　　//未匹配到的时候跳转到404页面
        next({name:'404'})
    }else{
        next()　　　　　　　　　　　　　　　　　//匹配到的时候跳转相应的路由
    }
})
export default router
