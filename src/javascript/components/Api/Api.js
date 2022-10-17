

class Api {
    #url;
    constructor() {
        this.#url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'

        this.favoritCoin=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']
        this.singleRequest=null
        this.allRequest=null
        this.preLoader=document.querySelector('.pre_loader')
        this.container=document.getElementById('popular')
        this.start()
    }
     setUrl(coin_name,price_change){
        return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=${price_change}`
    }
     start(){
           let result=[]
           this.fetchAllData().
           then(response=>{
               this.favoritCoin.forEach(item=>{
                   response.forEach(coin=>{
                       if(item===coin.id){
                           result.push(coin)
                       }
                   })
               })
               return result
           }).
           then(finalResult=>{
               this.showData(finalResult)
               this.preLoader.style.display='none'
               this.container.style.overflowY='scroll'
           }).
           catch(err=>{
                   alert('sorry!\nserver is not responding!')
           })
     }
    async fetchSingleData (coin_name,price_change){
        this.singleRequest=await fetch(this.setUrl(coin_name,price_change))
        if(this.singleRequest.ok){
            return await this.singleRequest.json()
        }else{
            throw Error(`${this.singleRequest.status}`)
        }
    }
    async fetchAllData(){
        this.allRequest=await fetch(this.#url)
        if(this.allRequest.ok){
            return await this.allRequest.json()
        }else{
            throw Error(`${this.allRequest.status}`)
        }
    }
    showData(result){
        let allData=result.map(coin=>{
            return `
                <price-card icon="${coin.image}" coin-name="${coin.name}" abb-name="${(coin.symbol).toUpperCase()}"
                    price="${'$'+coin.current_price}" state="${`${coin.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'}"  change-state="${coin.price_change_percentage_24h.toFixed(2) +'%'}"
                ></price-card>
            `
        }).join('')

        this.container.insertAdjacentHTML('beforeend',allData)
    }


}


export default Api