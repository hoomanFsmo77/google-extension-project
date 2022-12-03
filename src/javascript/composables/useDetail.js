import {useRouter} from "vue-router";
import {ref,onMounted} from "vue";
import axios from "axios";
import {removeFavWindow,favList,storeData,updateUserFav} from "./useHelper";
import {removeNotification} from "../background.js";

const detail =(props)=>{
    const router=useRouter()
    let mode=ref(false)
    let coinData=ref({})

    const backward = () => {
      router.push({
          name:'search'
      })
    }

    onMounted(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}`).then(response=>{
            coinData.value=response.data
            mode.value=true
        })
    })



    return {backward,mode,coinData}
}

const detailCard=(props)=>{
    const isSelected=window.favArray.includes(props.coinId) ? ref(true) : ref(false)
    const modal=ref(false)
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




    return {isSelected,addToFollowing,modal,redirectToForm}
}


export {detail,detailCard}