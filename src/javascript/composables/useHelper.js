import axios from "axios";

let favList='_ext_fav_'
let alertList='_ext_alert_'
let timerList='_ext_timer_'
let favCoins=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']



const removeFavWindow=coinId=>{
    window.favArray.splice(window.favArray.indexOf(coinId),1)
    window.alertCoin.splice(window.alertCoin.indexOf(coinId),1)
}
const removeAlertWindow = coinId => {
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

const updateUserFav = favArray => {
    axios.put(`https://extension-cdfdf-default-rtdb.firebaseio.com/users/${extractToken()}/fav.json`,{
        fav:favArray
    }).then(response=>{
        // console.log(response)
    }).catch(err=>{

    })
}

const updateUserAlert = alertArray => {
    axios.put(`https://extension-cdfdf-default-rtdb.firebaseio.com/users/${extractToken()}/alert.json`,{
        alert:alertArray
    }).then(response=>{
        // console.log(response)
    }).catch(err=>{

    })
}


const filterUserFav = (favArray,mode) => {
    let trendingAddedCoins=[...favArray]
    let favoriteAddedCoins=[]
    let i=0
    favArray.forEach(item=>{
        favCoins.forEach(coin=>{
            if(item===coin){
                trendingAddedCoins.splice(favArray.indexOf(item)-i,1)
                favoriteAddedCoins.push(item)
                i++
            }
        })
    })
    if(mode==='fav'){
        return [...new Set(favoriteAddedCoins)]
    }else if(mode==='trend'){
        return  trendingAddedCoins
    }
}




export {removeFavWindow,extractToken,storeData,getStoreData,favList,deleteCookie,updateUserFav,filterUserFav,removeAlertWindow,alertList,updateUserAlert,timerList}