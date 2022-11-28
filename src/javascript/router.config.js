import {createRouter,createWebHashHistory} from "vue-router";

const User=()=>import('./Pages/User.vue')
////////////// home components
const Home=()=> import('./Pages/Home/Home.vue')
const popular=()=>import('./Pages/Home/Popular.vue')
const following=()=>import('./Pages/Home/Following.vue')
////////////// search component
const SearchIndex=()=>import('./Pages/Search/index.vue')
const detail=()=>import('./Pages/Search/Detail.vue')
const Search=()=>import('./Pages/Search/Search.vue')

import  {homeSection,trendingSection} from "./composables/useApp.js";
const {homeData,homeError}=homeSection()


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
                props:{coinsList:homeData,error:homeError}
            },{
                path:'following',
                name:'followingCoin',
                component:following
            },
        ]
    },
    {
        path:'/search',
        component:SearchIndex,
        name:'searchPage',
        redirect: {
          name:'search'
        },
        children: [
            {
                path:'',
                component:Search,
                name:'search',
                props: {trendingList:trendingSection()}
            },{
                path:'/detail',
                component:detail,
                name:'detail'
            }
        ]
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


