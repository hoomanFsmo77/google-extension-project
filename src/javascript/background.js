import Storage from "./components/Storage/Storage";
import Api from "./components/Api/Api.js";
let api=new Api()
let storage=new Storage()
///////////////////////////////////////////////////////////////////
let time=10;
let timerContainer=[]
/////////////////////////////// set notification on load
const backgroundInit = () => {
    console.log('ddddd')
    timerContainer=storage.getData(storage.alertList) || []
    let alertList=storage.getData() ?? []
    if(alertList.length > 0){
        alertList.forEach(item=>{
            createNotification(item,false)
        })
    }
}

///////////////////////////////// create notification
const createNotification = (coinId,storeData=true) => {
    let interval =setInterval(()=>{
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

    if(storeData){
        timerContainer.push({
            name:coinId,
            timer:interval
        })
        storage.setData(timerContainer,storage.alertList)
    }


}


///////////////////////////// delete notification
const removeNotification = (coinId) => {
    console.log(coinId)
    let targetIndex=timerContainer.findIndex(item=>{
        return item.name===coinId
    })
    console.log([...timerContainer])

    window.clearInterval(timerContainer[targetIndex]?.timer)
    clearInterval(timerContainer[targetIndex]?.timer)
    timerContainer.splice(targetIndex,1)
    storage.setData(timerContainer,storage.alertList)

    console.log([...timerContainer])

}


///////////////////////////////////// remove all notifications
const removeAllAlerts = () => {
  timerContainer.forEach(item=>{
      window.clearInterval(item.timer)
      clearInterval(item.timer)
  })
   timerContainer=[]
   storage.setData(timerContainer,storage.alertList)
}






export {backgroundInit,createNotification,removeNotification,removeAllAlerts}