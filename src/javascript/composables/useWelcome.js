import {useRouter} from "vue-router";
import {storeData,favList,deleteCookie,alertList} from "./useHelper.js";
import {removeAllAlerts} from "../background.js";


export default ()=>{
    let router=useRouter()
    const changePopularRoute = () => {
        router.push({name:'form'})
        router.getRoutes().forEach(item=>{
            if(item.name==='userPage'){
                item.redirect.name='form'
            }
        })
    }
    const gotoHome = () => {
      router.push({name:'homePage'})
      document.querySelector('.nav_tracer').style.left='10%'
    }
    const logout = () => {
        deleteCookie(10)
        changePopularRoute()
        window.favArray=[]
        window.alertCoin=[]
        window.isLogin=false
        storeData([],favList)
        storeData([],alertList)
        removeAllAlerts()
    }

    return {gotoHome,logout}
}