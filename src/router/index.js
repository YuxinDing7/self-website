import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from "../views/my-home.vue"
import MainFrame from "../views/main-frame.vue"
import projects from "../views/projects.vue"
import wechat from "../views/wechat.vue"

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
            {
                path:'wechat', 
                component: wechat
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router