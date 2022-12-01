import {ref} from "vue";
import axios from "axios";
import {removeFavWindow,extractToken,storeData,favList,getStoreData} from "./useHelper.js";



window.alertCoin=[]


export default (props)=>{
    console.log('getStoreData(favList)',getStoreData(favList))
    console.log('window.favArray',window.favArray)
    window.favArray=getStoreData(favList)
    let isSelected=window.favArray.includes(props.coinId) ? ref(true) : ref(false)


    const addToFavoriteHandler = e => {

        let coinId=e.target.dataset.id
        if(window.isLogin){
            if(!window.favArray.includes(coinId)){
                window.favArray.push(coinId)
                isSelected.value=true
            }else{
                removeFavWindow(coinId)
                isSelected.value=false
            }
            storeData(window.favArray,favList)
            updateUserInfo(window.favArray)
        }
    }


    const updateUserInfo = favArray => {
        axios.put(`https://extension-cdfdf-default-rtdb.firebaseio.com/users/${extractToken()}/fav.json`,{
            fav:favArray
        }).then(response=>{
            // console.log(response)
        }).catch(err=>{
            
        })
    }






    return {addToFavoriteHandler,isSelected}

}