import Storage from "./components/Storage/Storage";
import Api from "./components/Api/Api.js";
let api=new Api()
let storage=new Storage()
///////////////////////////////////////////////////////////////////
let interval;
let time=10;
let timerContainer=[]
/////////////////////////////// set notification on load
const init = () => {
    timerContainer=[]
    if(storage.getData.length > 0){
        storage.getData.forEach(item=>{
            createNotification(item)
        })
    }
}

///////////////////////////////// create notification
const createNotification = coinId => {
    interval =setInterval(()=>{
        api.fetchCoinPriceOnly(coinId).
        then(response=>{
            new Notification(`MultiCoin extension price alert`,{
                icon:'./assets/logo_32.png',
                body:`${coinId} price is currently ${response[coinId].usd} $`
            })
        }).
        catch(err=>{
            console.log(err)
        })
    },time*1000)
    timerContainer.push({
        name:coinId,
        timer:interval
    })
}


///////////////////////////// delete notification
const removeNotification = (coinId,isLogout=false) => {
    let targetIndex=timerContainer.findIndex(item=>{
        return item.name===coinId
    })
    clearInterval(timerContainer[targetIndex]?.timer)
    timerContainer.splice(targetIndex,1)
    if(isLogout){
        timerContainer=[]
        interval=null
    }

}


init()
export {createNotification,removeNotification}