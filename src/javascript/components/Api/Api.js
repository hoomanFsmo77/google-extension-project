class Api {
    #url;
    #trending_url;
    #user_url;
    constructor() {
        this.#user_url='https://extension-cdfdf-default-rtdb.firebaseio.com/users'
        this.#url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h'
        this.#trending_url='https://api.coingecko.com/api/v3/search/trending'
        this.favoritCoin=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']
        this.singleRequest=null
        this.allRequest=null
        this.createReq=null
        this.singleUserReq=null
        this.getUsersReq=null
        this.updateReq=null
        this.priceOnly=null
        this.trendingContainer=document.querySelector('.trending_container')
        this.preLoader=document.querySelector('.pre_loader')
        this.container=document.getElementById('popular')
    }
    start(){
        this.startMainSection()
        this.startTrendingSection()
    }
    startMainSection(coinsArray=this.favoritCoin,has_ring='no',target=this.container,is_alert='no'){
        let result=[]
        this.fetchAllData(this.#url).
        then(response=>{
            coinsArray.forEach(item=>{
                response.forEach(coin=>{
                    if(item===coin.id){
                        result.push(coin)
                    }
                })
            })
            return result
        }).
        then(finalResult=>{
            this.showData(finalResult,has_ring,target,is_alert)
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
    setUrl(coin_name){
        return `https://api.coingecko.com/api/v3/coins/${coin_name}`
    }
    async fetchSingleData (coin_name){
        this.singleRequest=await fetch(this.setUrl(coin_name))
        if(this.singleRequest.ok){
            return await this.singleRequest.json()
        }else{
            throw Error(`${this.singleRequest.status}`)
        }
    }
    async fetchAllData(url=this.#url){
        this.allRequest=await fetch(url)
        if(this.allRequest.ok){
            return await this.allRequest.json()
        }else{
            throw Error(`${this.allRequest.status}`)
        }
    }
    async fetchCoinPriceOnly(coin_id){
        this.priceOnly=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=usd`)
        if(this.priceOnly.ok){
            return await this.priceOnly.json()
        }else{
            throw Error(`${this.priceOnly.status}`)
        }
    }
    async createData(newData,url=this.#user_url){
        this.createReq=await fetch(url + '.json',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        if(this.createReq.ok){
            return await this.createReq.json()
        }else{
            throw Error(this.createReq.status)
        }
    }
    async getSpecificUser(id,url=this.#user_url){
        this.singleUserReq=await fetch(url+`/${id}.json` )
        if(this.singleUserReq.ok){
            return await this.singleUserReq.json()
        }else{
            throw Error(this.singleUserReq.status)
        }
    }
    async getAllUsers(){
        this.getUsersReq=await fetch(this.#user_url + '.json')
        if(this.getUsersReq.ok){
            return await this.getUsersReq.json()
        }else{
            throw Error(`${this.getUsersReq.status}`)
        }
    }
    async updateUser(id,newData,url=this.#user_url){
        this.updateReq=await fetch(url + `/${id}.json` ,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        if(this.updateReq.ok){
            return await this.updateReq.json()
        }else{
            throw Error(`${this.updateReq.status}`)
        }

    }
    showTrendingData(result){
        let {coins:main}=result
        let allData=main.map(coin=>{
            return `<trending-card
                    icon="${coin.item.small}"
                    coin-name="${coin.item.id}"
                    abb-name="${coin.item.symbol}"
                    current-price="${Number(coin.item.price_btc).toFixed(5)}$"
                    rank="${coin.item.market_cap_rank}"
                ></trending-card>`
        }).join('')
        this.trendingContainer.insertAdjacentHTML('beforeend',allData)
    }
    showData(result,has_ring,target,is_alert){
        let allData=result.map(coin=>{
            return `
                <price-card icon="${coin.image}" is_alert="no" has-ring="${has_ring}" coin-id="${coin.id}" coin-name="${coin.name}" abb-name="${(coin.symbol).toUpperCase()}"
                    price="${coin.current_price} $" state="${`${coin.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'}"  change-state="${coin.price_change_percentage_24h.toFixed(2) +'%'}"
                ></price-card>
            `
        }).join('')
        target.insertAdjacentHTML('beforeend',allData)

        this.getSpecificUser(this.extractToken).
        then(response=>{
            if(has_ring==='yes'){
                this.setUserAlert(response,document.querySelector('.fav_content').querySelectorAll('price-card'))
                this.setUserFavorite(response,document.querySelector('#popular').querySelectorAll('price-card'))
            }
        })

    }
    get extractToken(){
        return document.cookie.slice(document.cookie.indexOf('=')+1)
    }
    setUserFavorite(response,targetNode){
        response.fav.forEach(coin=>{
            targetNode.forEach(card=>{
                if(card.getAttribute('coin-id')===coin){
                    card.shadowRoot.querySelector('.bi-heart-fill').classList.replace('text-muted','text-green')
                }
            })
        })
    }
    setUserAlert(response,targetNode){
        response?.alert?.forEach(item=>{
            targetNode.forEach(node=>{
                if(node.getAttribute('coin-id')===item){
                    node.shadowRoot.querySelector('.add_to_favorite').children[1].classList.replace('text-muted','text-red')
                }
            })
        })
    }
}


export default Api