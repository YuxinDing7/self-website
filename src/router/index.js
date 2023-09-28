import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from "../pages/my-home.vue"
import MainFrame from "../pages/main-frame.vue"
import projects from "../pages/projects.vue"
import wechat from "../pages/wechat.vue"

const routes = [
    {
        path:'/', 
        component: MainFrame,
        children:[
            {
                path:'',
                component: MyHome,
            },
            {
                path:'projects',
                component: projects,
            },
        ],
    },
    { path:'/wechat', component: wechat}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router