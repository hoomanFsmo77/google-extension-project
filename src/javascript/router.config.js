import {createRouter,createWebHashHistory} from "vue-router";

////////////// user components
import UserIndex from './Pages/User/index.vue'
import form from './Pages/User/Form.vue'
import welcome from './Pages/User/Welcome.vue'


////////////// home components
import HomeIndex from './Pages/Home/index.vue'
import popular from './Pages/Home/Popular.vue'
import followingIndex from './Pages/Home/Following/index.vue'
import isLogin from './Pages/Home/Following/isLogin.vue'
import isNotLogin from './Pages/Home/Following/isNotLogin.vue'

////////////// search component
import SearchIndex from './Pages/Search/index.vue'
import detail from './Pages/Search/Detail.vue'
import TrendingCoins from './Pages/Search/TrendingCoins.vue'



import  {homeSection,trendingSection,userSection} from "./composables/useApp.js";
import {backgroundInit} from "./background.js";
backgroundInit()

const routes=[
    {
        path:'/',
        component:HomeIndex,
        name:'homePage',
        redirect:{
          name:'popularCoin'
        },
        children:[
            {
                path:'',
                name:'popularCoin',
                component:popular,
                props: {popularData:homeSection()}
            },{
                path:'followingIndex',
                name:'followingCoinIndex',
                component:followingIndex,
                redirect:{
                    name:'isNotLogin'
                },
                children:[
                    {
                        path:'',
                        component:isNotLogin,
                        name:'isNotLogin'
                    },{
                        path:'/isLogin',
                        component:isLogin,
                        name:'isLogin',
                        props:{trendingData:trendingSection()}
                    }
                ]
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
                component:TrendingCoins,
                name:'search',
                props: {searchData:trendingSection(),popularData:homeSection()}
            },{
                path:'/detail/:id',
                component:detail,
                name:'detail',
                props: true
            }
        ]
    },
    {
        path:'/user',
        component:UserIndex,
        name:'userPage',
        redirect: {
          name: 'form'
        },
        children: [
            {
                path:'',
                component:form,
                name:'form',
                props: {userData:userSection()}
            },{
                path:'/welcome/:email',
                component:welcome,
                name:'welcome',
                props: true
            },

        ]
    },

]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router


