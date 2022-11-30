import axios from "axios";


const extractToken=()=>{
    return document.cookie.slice(document.cookie.indexOf('=')+1)
}

const homeSection= async ()=>{
    let favCoins=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']

    let homeData=[]
    let homeError=false
    let bitcoinPrice=null

   await axios.
        get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h').
        then(response=>{
        favCoins.forEach(item=>{
            response.data.forEach(coin=>{
                if(item===coin.id){
                    homeData.push(coin)
                }
            })
        })
        bitcoinPrice=response.data.filter(item=>item.id==='bitcoin')[0].current_price

    }).
        catch(err=>{
        homeError=true
    })

    return {homeData,homeError,bitcoinPrice}
}

const trendingSection =  async () => {

    let trendingData=[]
    await axios.
    get('https://api.coingecko.com/api/v3/search/trending').
    then(result=>{
        trendingData=result.data.coins
    })

    return {trendingData}
}

const userSection = async () => {
    let userInfo=null
    if(document.cookie.includes('token')){
        window.isLogin=true
        await axios.get(`https://extension-cdfdf-default-rtdb.firebaseio.com/users/${extractToken()}.json`).then(response=>{
            userInfo=response.data
        })
    }else{
        window.favArray=[]
        window.alertCoin=[]
        window.isLogin=false
    }
    return {userInfo}
}


export {homeSection,trendingSection,userSection}