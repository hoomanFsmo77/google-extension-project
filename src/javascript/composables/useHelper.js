
let favList='_ext_fav_'
let alertList='_ext_alert_'
let timerList='_ext_timer_'


const removeFavWindow=coinId=>{
    window.favArray.splice(window.favArray.indexOf(coinId),1)
    window.alertCoin.splice(window.alertCoin.indexOf(coinId),1)
}


const extractToken=()=>{
    return document.cookie.slice(document.cookie.indexOf('=')+1)
}
const storeData=(data,name=alertList)=>{
    localStorage.setItem(name,JSON.stringify(data))
}

const getStoreData=(name=alertList)=>{
    if(localStorage.getItem(name)){
        return JSON.parse(localStorage.getItem(name))
    }
}

const deleteCookie=(day)=>{
    let date=new Date()
    date.setTime(date.getTime() - (day *24*60*60*1000))
    document.cookie=`token=;path=/;expires=${date}`
}

export {removeFavWindow,extractToken,storeData,getStoreData,favList,deleteCookie}