import {ref} from "vue";
import axios from "axios";
import {getStoreData,favList} from "./useHelper.js";


export default ()=>{
    let mode=ref(false)
    let favCoins=getStoreData(favList)
    let coinInfoContainer=ref([])


    favCoins.forEach(coinId=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`).
        then(response=>{
            console.log(response.data)
            coinInfoContainer.value.push(response.data)
            mode.value=true
        })
    })

    return {mode,coinInfoContainer}
}