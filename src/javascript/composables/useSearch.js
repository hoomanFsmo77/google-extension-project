import axios from "axios";
import {ref} from "vue";
let timeout=null
let delay=1500
export default ()=>{
    let active=ref(false)
    let searchResult=ref([])
    let searchBox=ref(null)
    const searchInputHandler = e => {
        if(timeout){
            clearTimeout(timeout)
        }
        timeout=setTimeout(()=>{
            searchAction(e)
        },delay)
    }
    const searchAction = e => {
        let value=e.target.value.toLowerCase()
        if(isNaN(value)){
            axios.
            get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h').
            then(response=>{
                return response.data.filter(coin=>{
                    return coin.name.toLowerCase().startsWith(value.trim())
                })
            }).then(target=>{
                searchBox.innerHtml=''
                if(target.length >0){
                    active.value=true
                    searchResult.value=target
                }else{
                    active.value=false
                }
            })
        }
    }

    return {searchInputHandler,active,searchResult,searchBox}
}