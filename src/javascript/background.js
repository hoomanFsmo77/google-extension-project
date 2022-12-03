import {getStoreData,timerList,storeData} from "./composables/useHelper.js";
import axios from "axios";
///////////////////////////////////////////////////////////////////
let timerContainer=[]
/////////////////////////////// set notification on load
const backgroundInit = () => {
    timerContainer=getStoreData(timerList) || []
    let alertList=getStoreData() ?? []
    if(alertList.length > 0){
        alertList.forEach(item=>{
            createNotification(item,false)
        })
    }
}

///////////////////////////////// create notification
const createNotification = (coinId,saveData=true) => {
    let timer= window.interval ?? 1

    let interval =setInterval(()=>{
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`).
        then(response=>{
            new Notification(`MultiCoin extension price alert`,{
                icon:'./assets/logo_32.png',
                body:`${coinId} price is currently ${response.data[coinId].usd} $`
            })
        }).
        catch(err=>{
            console.log(err)
        })
    },timer *60000)

    if(saveData){
        timerContainer.push({
            name:coinId,
            timer:interval
        })
        storeData(timerContainer,timerList)
    }
}


///////////////////////////// delete notification
const removeNotification = (coinId) => {
    let targetIndex=timerContainer.findIndex(item=>item.name===coinId)
    window.clearInterval(timerContainer[targetIndex]?.timer)
    clearInterval(timerContainer[targetIndex]?.timer)
    timerContainer.splice(targetIndex,1)
    storeData(timerContainer,timerList)
}


///////////////////////////////////// remove all notifications
const removeAllAlerts = () => {
    timerContainer.forEach(item=>{
        window.clearInterval(item.timer)
        clearInterval(item.timer)
    })
    timerContainer=[]
    storeData(timerContainer,timerList)
}




export {backgroundInit,createNotification,removeNotification,removeAllAlerts}