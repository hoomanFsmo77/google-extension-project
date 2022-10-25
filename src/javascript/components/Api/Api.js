import Helper from "../Helper/Helper.js";
let helper=new Helper()
///////////////////////////////////
class Api {
    #url;
    #trending_url;
    #user_url;
    constructor() {
        // >>>>>>>>>>>>>>>>>>>>>>>> urls <<<<<<<<<<<<<<<<<<<<<<<<
        this.#user_url='https://extension-cdfdf-default-rtdb.firebaseio.com/users'
        this.#url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h'
        this.#trending_url='https://api.coingecko.com/api/v3/search/trending'
        this.favoritCoin=['bitcoin','ethereum','tether','binancecoin','ripple','cardano','solana','dogecoin','polkadot','shiba-inu','tron','avalanche-2','litecoin','bittorrent','neo','fantom']

        // >>>>>>>>>>>>>>>>>>>>>>>>>> requests variables <<<<<<<<<<<<<<<<<
        this.singleRequest=null
        this.allRequest=null
        this.createReq=null
        this.singleUserReq=null
        this.getUsersReq=null
        this.updateReq=null
        this.priceOnly=null

        // >>>>>>>>>>>>>>>>>>>>>>>> elements <<<<<<<<<<<<<<<<<<<<<<<
        this.trendingContainer=document.querySelector('.trending_container')
        this.preLoader=document.querySelector('.pre_loader')
        this.container=document.getElementById('popular')
        this.fav_content=document.querySelector('.fav_content')
        this.login_content=document.querySelector('.login_content')
        this.following_section=document.querySelector('#following')
    }
    // >>>>>>>>>>>>>>>>>> initializing function <<<<<<<<<<<<<<<<<<
    init(){
        // >>>>>>>>>>>>>>>>>> fetch and add price card in home section <<<<<<<<<<<
        this.homeSection()

        // >>>>>>>>>>>>>>>>>> fetch and add price card in trending section <<<<<<<<<<<
        this.trendingSection()
    }
// >>>>>>>>>>>>>>>>>>>>>> home section functions <<<<<<<<<<<<<<<<<<<<<
    homeSection(coinsArray=this.favoritCoin,has_ring='no',target=this.container){
        let result=[]
        this.fetchAllCoins(this.#url).
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
            helper.hideError()
            this.showHomeSectionData(finalResult,has_ring,target)
            this.preLoader.style.display='none'
            this.container.style.overflowY='scroll'
        }).
        catch(err=>{
            console.warn(`error in api.js / line 56 / home section funcs and status error code ${err}`)
            helper.showError()
        })
    }
    showHomeSectionData(result,has_ring,target){
        let allData=result.map(coin=>{
            return helper.priceCard(coin.id,coin.image,coin.name,coin.symbol,coin.current_price,coin.price_change_percentage_24h,has_ring)

        }).join('')
        target.insertAdjacentHTML('beforeend',allData)

        this.getSpecificUser(helper.extractToken).
        then(response=>{
            helper.hideError()
            if(has_ring==='yes'){
                this.setUserAlert(response,document.querySelector('.fav_content').querySelectorAll('price-card'))
                this.setUserFavoriteOnMainSection(response,document.querySelector('#popular').querySelectorAll('price-card'))
            }
        }).
        catch(err=>{
            console.warn(`error in api.js / line 78 / home section funcs and status error code ${err}`)
            // this.showError()
        })

    }

// >>>>>>>>>>>>>>>>>>>>>>>>> trending section functions <<<<<<<<<<<<<<<<<<<<
    trendingSection(){
        this.fetchAllCoins(this.#trending_url).
        then(response=>this.showTrendingData(response)).
        catch(err=>{
            console.warn(`error in api.js / line 90 / trending section funcs and status error code ${err}`)
            helper.showError()
        })
    }
    showTrendingData(result){
        helper.hideError()
        let {coins:main}=result
        let allData=main.map(coin=>{
            return helper.trendingCard(coin.item.small,coin.item.id,coin.item.symbol,coin.item.price_btc,coin.item.market_cap_rank)
        }).join('')
        this.trendingContainer.insertAdjacentHTML('beforeend',allData)


        this.getSpecificUser(helper.extractToken).
        then(response=>{
            helper.hideError()
            this.setUserFavoriteOnTrendingSection(response,result,document.querySelector('.trending_container').querySelectorAll('trending-card'))
        }).
        catch(err=>{
            console.warn(`error in api.js / line 118 / trending section funcs and status error code ${err}`)
            // this.showError()
        })


    }

// >>>>>>>>>>>>>>>>>> fetch for coin api <<<<<<<<<<<<<<<<<<
    async fetchSingleCoin (coin_name,isFiltered=false){
        this.singleRequest=await fetch(helper.setUrl(coin_name,isFiltered))
        if(this.singleRequest.ok){
            return await this.singleRequest.json()
        }else{
            throw Error(`${this.singleRequest.status}`)
        }
    }
    async fetchAllCoins(url=this.#url){
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



// >>>>>>>>>>>>>>>>>>> fetch for database <<<<<<<<<<<<<<<<<<<<<
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



// >>>>>>>>>>>>>>>> set user properties <<<<<<<<<<<<<<<<<<
    setUserFavoriteOnMainSection(response,targetNode){
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
    setUserFavoriteOnTrendingSection(userInfo,trendingCoin,targetNode){
        userInfo.fav.forEach(item=>{
            targetNode.forEach(node=>{
                let button=node.shadowRoot.querySelector('.follow_btn')
                if(button.getAttribute('data-id')===item){
                    button.classList.replace('bg-dark-light','bg-green')
                    button.innerHTML=`Following${helper.checkSvg}`
                }
            })
        })


        let userTrendingCoins=helper.filterUserFavorite(userInfo.fav,'trend')
        let isNotTrendingCoin=[...userTrendingCoins];
        let i=0
        userTrendingCoins.forEach(item=>{
            trendingCoin.coins.forEach(coin=>{
                if(coin.item.id === item){
                    isNotTrendingCoin.splice(userTrendingCoins.indexOf(item)-i,1)
                    i++
                }
            })
        })

        setTimeout(()=>{
            isNotTrendingCoin.forEach(item=>{
                document.querySelector('.fav_content').querySelectorAll('price-card').forEach(node=>{
                    if(node.getAttribute('coin-id')===item){
                        node.setAttribute('out-trending','yes')
                    }
                })
            })
        },4000)

    }

// >>>>>>>>>>>>>>>> coin add to following list <<<<<<<<<<<<<<<
    updateUserInfo(favoriteArray){
        this.getSpecificUser(helper.extractToken).
        then(response=>{
            helper.hideError()
            let newData={
                email:response.email,
                password:response.password,
                fav:favoriteArray
            }
            this.updateUser(helper.extractToken,newData).then(response=>{
                helper.hideError()
            }).
            catch(err=>{
                console.warn(`error in api.js / line 237 / add to fav list and status error code ${err}`)
                helper.showError()
            })
        }).
        catch(err=>{
            console.warn(`error in api.js / line 242 / add to favorite card and status error code ${err}`)
            helper.showError()
        })
    }
    addToFollowing(coinId,favoriteArray){
        this.fetchSingleCoin(coinId).then(response=>{
            if(favoriteArray.length===1){
                this.fav_content.classList.replace('d-none','d-flex')
                this.login_content.classList.replace('d-flex','d-none')
            }
            let {
                image:coin_images,
                name:coin_name,
                symbol:coin_symbol,
                market_data:coin_market,
            }=response
            let element=helper.priceCard(response.id,coin_images.small,coin_name,coin_symbol,coin_market?.current_price.usd,coin_market?.price_change_percentage_24h,'yes')

            this.fav_content.insertAdjacentHTML('beforeend',element)
        })
    }
    removeFavoriteCoin=id=>{
        this.following_section.querySelectorAll('price-card').forEach(card=>{
            if(card.getAttribute('coin-id')===id){
                card.setAttribute('show','no')
            }
        })
    }

}
export default Api