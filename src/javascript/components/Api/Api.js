class Api {
    #url;
    #trending_url;
    constructor() {
        this.#url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'
        this.#trending_url='https://api.coingecko.com/api/v3/search/trending'
        this.favoritCoin=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']
        this.singleRequest=null
        this.allRequest=null
        this.trendingContainer=document.querySelector('.trending_container')
        this.preLoader=document.querySelector('.pre_loader')
        this.container=document.getElementById('popular')
    }
    start(){
        this.startMainSection()
        this.startTrendingSection()
    }

    startMainSection(){
        let result=[]
        this.fetchAllData(this.#url).
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
            console.log(err)
        })
    }
    startTrendingSection(){
        this.fetchAllData(this.#trending_url).
        then(response=>this.showTrendingData(response)).
        catch(err=>{
            console.log(err)
        })
    }
    setUrl(coin_name,price_change){
        return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=${price_change}`
    }
    async fetchSingleData (coin_name,price_change){
        this.singleRequest=await fetch(this.setUrl(coin_name,price_change))
        if(this.singleRequest.ok){
            return await this.singleRequest.json()
        }else{
            throw Error(`${this.singleRequest.status}`)
        }
    }
    async fetchAllData(url){
        this.allRequest=await fetch(url)
        if(this.allRequest.ok){
            return await this.allRequest.json()
        }else{
            throw Error(`${this.allRequest.status}`)
        }
    }
    showTrendingData(result){
        let {coins:main}=result
        let allData=main.map(coin=>{
            return `<trending-card
                    icon="${coin.item.small}"
                    coin-name="${coin.item.id}"
                    abb-name="${coin.item.symbol}"
                    current-price="${(coin.item.price_btc).toFixed(4)}$"
                    rank="${coin.item.market_cap_rank}"
                ></trending-card>`
        }).join('')
        this.trendingContainer.insertAdjacentHTML('beforeend',allData)
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