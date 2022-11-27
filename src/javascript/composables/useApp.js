import axios from "axios";

const homeSection= ()=>{
    let favCoins=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']

    let result=[]
    let error=false

    axios.
    get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h').
    then(response=>{
        favCoins.forEach(item=>{
            response.data.forEach(coin=>{
                if(item===coin.id){
                    result.push(coin)
                }
            })
        })

    }).
    catch(err=>{
        error=true
    })
    return {result,error}
}


export {homeSection}