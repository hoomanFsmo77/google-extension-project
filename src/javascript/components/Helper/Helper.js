class Helper {
    constructor() {
        this.apiErrorMessage=document.querySelector('.api_message')
        this.favoritCoin=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']
    }

    get extractToken(){
        return document.cookie.slice(document.cookie.indexOf('=')+1)
    }
    showError(){
        this.apiErrorMessage.classList.replace('d-none','d-flex')
    }
    hideError(){
        this.apiErrorMessage.classList.replace('d-flex','d-none')
    }
    filterUserFavorite(favArray,mode){
        let trendingAddedCoins=[...favArray]
        let favoriteAddedCoins=[]
        let i=0
        favArray.forEach(item=>{
            this.favoritCoin.forEach(coin=>{
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
    setUrl(coin_name,isFiltered=false){
        if(isFiltered){
            return `https://api.coingecko.com/api/v3/coins/${coin_name}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        }else{
            return `https://api.coingecko.com/api/v3/coins/${coin_name}`
        }

    }

    removeFavWindow=coinId=>{
        window.favArray.splice(window.favArray.indexOf(coinId),1)
        window.alertCoin.splice(window.alertCoin.indexOf(coinId),1)
    }
    priceCard(id,img,name,symbol,current_price,change_price,has_ring){
        return `<price-card has-ring="${has_ring}"  icon="${img}"  coin-id="${id}" coin-name="${name}" abb-name="${(symbol).toUpperCase()}"
                    price="${current_price} $" state="${`${change_price}`.includes('-') ? 'down' : 'up'}"  change-state="${change_price.toFixed(2) +'%'}"
                ></price-card>`
    }

    trendingCard(icon,name,symbol,current_price,rank){
        return `<trending-card
                    icon="${icon}"
                    coin-name="${name}"
                    abb-name="${symbol}"
                    current-price="${Number(current_price).toFixed(5)}$"
                    rank="${rank}"
                ></trending-card>`
    }

}




export  default Helper