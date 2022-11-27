import {createRouter,createWebHashHistory} from "vue-router";

const Search=()=>import('./Pages/Search.vue')
const User=()=>import('./Pages/User.vue')

////////////// home components
const Home=()=> import('./Pages/Home/Home.vue')
const popular=()=>import('./Pages/Home/Popular.vue')
const following=()=>import('./Pages/Home/Following.vue')

import  {homeSection} from "./composables/useApp.js";
const {result,error}=homeSection()

const routes=[
    {
        path:'/',
        component:Home,
        name:'homePage',
        redirect:{
          name:'popularCoin'
        },
        children:[
            {
                path:'',
                name:'popularCoin',
                component:popular,
                props:{coinsList:result,error:error}
            },{
                path:'following',
                name:'followingCoin',
                component:following
            },
        ]
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


