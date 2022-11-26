import {createRouter,createWebHashHistory} from "vue-router";
import Home from "./Pages/Home.vue";
import Search from "./Pages/Search.vue";
import User from "./Pages/User.vue";
const routes=[
    {
        path:'/',
        component:Home,
        name:'homePage'
    },
    {
        path:'/search',
        component:Search,
        name:'searchPage'
    },
    {
        path:'/user',
        component:User,
        name:'userPage'
    },

]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router


