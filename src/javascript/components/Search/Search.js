import Api from "../Api/Api.js";
import Helper from "../Helper/Helper.js";
//////////////////////////////////////////////
let api=new Api()
let helper=new Helper()
////////////////////////////////////////////////

class Search {
    constructor() {
        this.search_input=document.getElementById('search_input')
        this.search_container=document.querySelector('.result_box ul')
        this.search_box=document.querySelector('#search_section header')
        this.show_detail=document.querySelector('.result_show_detail')
        this.backward_btn=document.querySelector('.backward_btn')
        this.detail_content=document.querySelector('.detail_content')
        this.trending_container=document.querySelector('.trending_container')
        this.apiErrorMessage=document.querySelector('.api_message')
        this.home_section=document.querySelector('#home_section')
        this.user_section=document.querySelector('#user_section')
        this.result_box=document.querySelector('.result_box')
        this.timeout=null
        this.delay=1500
        // >>>>>>>>>>>>> initializing class <<<<<<<<<<<<<<<<<<<
        this.init()
    }

    init(){
        this.search_input.addEventListener('keyup',this.searchInputHandler)
        this.backward_btn.addEventListener('click',this.backwardBtnHandler)
        this.search_container.addEventListener('click',this.selectedCoinHandler)
    }

    // >>>>>>>>>>>>>>>>>>>> key up handler <<<<<<<<<<<<<<<<<
    searchInputHandler=e=>{
        if(this.timeout){
            clearTimeout(this.timeout)
        }
        this.timeout=setTimeout(()=>{
            this.searchAction(e)
        },this.delay)
    }
    searchAction=e=>{
        let value=e.target.value.toLowerCase()
        if(isNaN(value)){
            api.fetchAllCoins().
            then(response=>{
                helper.hideError()
                return response.filter(coin=>{
                    return coin.name.toLowerCase().startsWith(value.trim())
                })
            }).
            then(target=>this.showSearchResult(target)).
            catch(err=>{
                console.warn(`error in search.js / line 48 / key up and status error code ${err}`)
                helper.showError()
            })
        }else{
            this.search_container.innerHTML=''
            this.search_box.classList.remove('active')
        }
    }
    showSearchResult=target=>{
        if(target.length > 0) {
            this.search_container.innerHTML = ''
            this.search_box.classList.add('active')
            let allResult = target.map(coin => {
                return `<li data-id="${coin.id}" class="px-4 d-flex align-items-center gap-2 pointer blue-hover"><img src="${coin.image}" width="20" alt="">${coin.id}</li>`
            }).join('')
            this.search_container.insertAdjacentHTML('beforeend', allResult)
        }else{
            this.search_container.innerHTML=''
            this.search_box.classList.remove('active')
        }
    }


    // >>>>>>>>>>>>>>>> click on backward handler <<<<<<<<<<<<<<
    backwardBtnHandler=()=>{
        this.detail_content.innerHTML=''
        this.trending_container.style.display='grid'
        this.show_detail.style.cssText='opacity:0;visibility:hidden;z-index:-1'
        this.home_section.style.zIndex='1'
        this.user_section.style.zIndex='1'
        this.result_box.style.zIndex='1'
        document.querySelector('#search_section main').style.overflowY='auto'
    }


    // >>>>>>>>>>>>>>> click on li handler <<<<<<<<<<<<<
    selectedCoinHandler=e=>{
        if(e.target.tagName==='LI'){
            this.showDetailChanges()
            api.fetchSingleCoin(e.target.dataset.id).
            then(response=>this.showDetail(response)).
            catch(err=>{
                console.warn(`error in search.js / line 89 / fetch for selected coin and status error code ${err}`)
                helper.showError()
            })
        }
    }
    showDetailChanges=()=>{
        this.trending_container.style.display='none'
        this.detail_content.innerHTML=''
        this.home_section.style.zIndex='-1'
        this.user_section.style.zIndex='-1'
        this.show_detail.style.cssText='opacity:1;visibility:visible;z-index:9;overflow:auto'
        this.result_box.style.zIndex='10'
        document.querySelector('#search_section main').style.overflowY='hidden'
        this.search_input.value=''
        this.search_container.innerHTML=''
        this.search_box.classList.remove('active')
    }
    showDetail=data=>{
        helper.hideError()
        let {
            id:coin_id,
            image:coin_images,
            name:coin_name,
            symbol:coin_symbol,
            categories:coin_categories,
            market_data:coin_market,
            links:coin_links
        }=data
        console.log(data)
        let element=`<detail-card
                    coin-id="${coin_id}"
                    img="${coin_images.small ?? ''}"
                    name="${coin_name ?? ''}"
                    symbol="${coin_symbol  ?? ''}"
                    category="${coin_categories[0] ?? ''}"
                    supply="${coin_market?.max_supply ?? ''}"
                    volume="${coin_market?.total_volume.usd  ?? ''}"
                    current="${coin_market?.current_price.usd ?? ''}$"
                    market="${coin_market?.market_cap.usd ?? ''}"
                    ath="${coin_market?.ath.usd ?? ''}$"
                    atl="${coin_market?.atl.usd ?? ''}$"
                    ath-c="${ coin_market?.ath_change_percentage.usd ?? ''}%"
                    atl-c="${coin_market?.atl_change_percentage.usd ?? ''}%"
                    h-24="${coin_market?.high_24h.usd  ?? ''}$"
                    l-24="${coin_market?.low_24h.usd ?? ''}$"
                    c-24="${coin_market?.price_change_24h  ?? ''}$"
                    p-24="${coin_market?.price_change_percentage_24h ?? ''}%"
                    block-link="${coin_links?.blockchain_site[0] ?? ''}"
                    home-link="${coin_links?.homepage[0] ?? ''}"
                    >
                    </detail-card>`

        this.detail_content.insertAdjacentHTML('beforeend',element)
    }

}

export default Search