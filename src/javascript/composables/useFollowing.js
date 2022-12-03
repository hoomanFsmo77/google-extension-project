import {ref} from "vue";
import axios from "axios";
import {getStoreData, favList, filterUserFav} from "./useHelper.js";


export default (props)=>{
    let showIndexPage=window.favArray.length >0 ? ref(true) : ref(false)
    let activePreloader=ref(true)
    let favCoins=getStoreData(favList) || []
    let coinInfoContainer=ref([])
    let isNotTrendingList=ref([])


    favCoins.forEach(coinId=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`).
        then(response=>{
            coinInfoContainer.value.push(response.data)
            activePreloader.value=false
        })
    })

    props.trendingData.then(response=>{
        handlerOutTrending(response)
    })

    const handlerOutTrending = (response) => {
        let userTrendingCoins=filterUserFav(favCoins,'trend')
        let isNotTrendingCoin=[...userTrendingCoins]
        let i=0
        userTrendingCoins.forEach(item=>{
            response.trendingData.forEach(coin=>{
                if(coin.item.id === item){
                    isNotTrendingCoin.splice(userTrendingCoins.indexOf(item)-i,1)
                    i++
                }
            })
        })
        isNotTrendingList.value=isNotTrendingCoin
    }


    return {showIndexPage,coinInfoContainer,activePreloader,isNotTrendingList}
}