import {createRouter,createWebHashHistory} from "vue-router";

////////////// user components
import UserIndex from './Pages/User/index.vue'
import form from './Pages/User/Form.vue'
import welcome from './Pages/User/Welcome.vue'
// const UserIndex=()=>import('./Pages/User/index.vue')
// const form=()=>import('./Pages/User/Form.vue')
// const welcome=()=>import('./Pages/User/Welcome.vue')

////////////// home components
import HomeIndex from './Pages/Home/index.vue'
import popular from './Pages/Home/Popular.vue'
import followingIndex from './Pages/Home/Following/index.vue'
import isLogin from './Pages/Home/Following/isLogin.vue'
import isNotLogin from './Pages/Home/Following/isNotLogin.vue'

// const HomeIndex=()=> import('./Pages/Home/index.vue')
// const popular=()=>import('./Pages/Home/Popular.vue')
// const followingIndex=()=>import('./Pages/Home/Following/index.vue')
// const isLogin=()=>import('./Pages/Home/Following/isLogin.vue')
// const isNotLogin=()=>import('./Pages/Home/Following/isNotLogin.vue')
////////////// search component
import SearchIndex from './Pages/Search/index.vue'
import detail from './Pages/Search/Detail.vue'
import Search from './Pages/Search/Search.vue'

// const SearchIndex=()=>import('./Pages/Search/index.vue')
// const detail=()=>import('./Pages/Search/Detail.vue')
// const Search=()=>import('./Pages/Search/Search.vue')

import  {homeSection,trendingSection,userSection} from "./composables/useApp.js";


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
                        path:'isLogin',
                        component:isLogin,
                        name:'isLogin'
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
                component:Search,
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


