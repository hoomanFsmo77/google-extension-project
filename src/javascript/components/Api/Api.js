class Api {
    constructor() {
        this.favoritCoin=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']
        this.request=null
        this.preLoader=document.querySelector('.pre_loader')
        this.container=document.getElementById('popular')
        this.start()
    }
     setUrl(coin_name,price_change){
        return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=${price_change}`
    }
      start(){
         this.favoritCoin.forEach(async coin=> {
            this.showData(await this.fetchData(coin,'1h'))
        })
        setTimeout(()=>{
              this.preLoader.style.display='none'
        },4000)
     }
    async fetchData (coin_name,price_change){
        this.request=await fetch(this.setUrl(coin_name,price_change))
        if(this.request.ok){
            return await this.request.json()
        }else{
            throw Error(`${this.request.status}`)
        }
    }
    showData(result){
        let coinTag=document.createElement('price-card')
        coinTag.setAttribute('icon',result[0].image)
        coinTag.setAttribute('coin-name',result[0].name)
        coinTag.setAttribute('abb-name',(result[0].symbol).toUpperCase())
        coinTag.setAttribute('price','$'+result[0].current_price)
        coinTag.setAttribute('state',`${result[0].price_change_percentage_24h}`.includes('-') ? 'down' : 'up')
        coinTag.setAttribute('change-state',result[0].price_change_percentage_24h.toFixed(2) +'%')
        this.container.append(coinTag)
    }


}


export default Api