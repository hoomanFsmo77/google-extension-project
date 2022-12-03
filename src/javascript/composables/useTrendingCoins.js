import {ref} from "vue";
import {useRouter} from "vue-router";
import {removeFavWindow,storeData,favList,updateUserFav} from "./useHelper.js";
import {removeNotification} from "../background.js";

const trendingCoins=(props)=>{
    let mode=ref(false)
    let trendingCoinList=ref([])
    let bitCoinPrice=ref(1)


    Promise.all([props.searchData,props.popularData]).then(result=>{
        trendingCoinList.value=result[0].trendingData
        bitCoinPrice.value=result[1].bitcoinPrice
        mode.value=true
    })



    return {mode,trendingCoinList,bitCoinPrice}
}



const trendingCoinCard = (props) => {
    let isSelected=window.favArray.includes(props.coinName) ? ref(true) : ref(false)
    let modal=ref(false)
    const router=useRouter()

    const addToFollowing = (e,coinId) => {
        if(window.isLogin){
            if(!window.favArray.includes(coinId)){
                window.favArray.push(coinId)
                isSelected.value=true
            }else{
                removeNotification(coinId)
                removeFavWindow(coinId)
                isSelected.value=false
            }
            storeData(window.favArray,favList)
            updateUserFav(window.favArray)
        }else{
            modal.value=true
        }
    }
    const redirectToForm = () => {
        router.push({
            name:'userPage'
        })
        document.querySelector('.nav_tracer').style.left='78%'

    }





    return {addToFollowing,isSelected,redirectToForm,modal}
}









export {
    trendingCoins,
    trendingCoinCard
}