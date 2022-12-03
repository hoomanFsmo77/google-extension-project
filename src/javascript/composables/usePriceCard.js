import {ref,watch} from "vue";
import {useRouter} from "vue-router";
import {removeFavWindow,storeData,favList,getStoreData,updateUserFav,removeAlertWindow,alertList,updateUserAlert} from "./useHelper.js";
import {createNotification,removeNotification} from "../background.js";


export default (props)=>{
    window.favArray=getStoreData(favList) || []
    window.alertCoin=getStoreData(alertList) || []
    let isSelected=window.favArray.includes(props.coinId) ? ref(true) : ref(false)
    let activeAlert=window.alertCoin.includes(props.coinId) ? ref(true) : ref(false)
    let modal=ref(false)
    let alertModal=ref(false)
    const router=useRouter()
    const show=ref(true)
    const modalMessage=ref('')


    ////////// add to favorite
    const addToFavoriteHandler = (e,coinId) => {
        if(window.isLogin){
            if(!window.favArray.includes(coinId)){
                window.favArray.push(coinId)
                isSelected.value=true
            }else{
                removeFavWindow(coinId)
                isSelected.value=false
                removeNotification(coinId)
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
    ////////// remove out trending coin
    const removeOutOfTrendingCoinHandler = () => {
        removeNotification(props.coinId)
        removeFavWindow(props.coinId)
        storeData(window.favArray,favList)
        updateUserFav(window.favArray)
        show.value=false
    }


    ///////// add to notification

    const addToAlertListHandler = (e,coinId) => {
        if(!window.alertCoin.includes(coinId)){
            window.alertCoin.push(coinId)
            activeAlert.value=true
            modalMessage.value=`Alert created!<br>We will notify you every ${window.interval ?? 1} minutes.`
            createNotification(coinId)
        }else{
            modalMessage.value='Alert Removed!'
            removeNotification(coinId)
            removeAlertWindow(coinId)
            activeAlert.value=false
        }
        alertModal.value=true
        storeData(window.alertCoin,alertList)
        updateUserAlert(window.alertCoin)

    }

    const closeModal = () => {
      alertModal.value=false
    }




    return {addToFavoriteHandler,isSelected,modal,redirectToForm,removeOutOfTrendingCoinHandler,show,addToAlertListHandler,activeAlert,alertModal,closeModal,modalMessage}

}