import {useRouter} from "vue-router";

const deleteCookie=(day)=>{
    let date=new Date()
    date.setTime(date.getTime() - (day *24*60*60*1000))
    document.cookie=`token=;path=/;expires=${date}`
}


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

    }

    return {gotoHome,logout}
}