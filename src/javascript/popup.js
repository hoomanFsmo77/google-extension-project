import '../style/popup.scss';
import '../assets/logo_32.png';
import '../assets/logo_16.png';
import '../assets/logo_48.png';
import '../assets/logo_128.png';
import '../assets/login.svg'
import '../assets/fire.svg'
import '../../manifest.json';
import Api from "./components/Api/Api.js";
////////////////////////////////////////////
let api=new Api()
let tab_tracer=document.querySelector('.tab_tracer')
let tab_content=document.getElementById('tab_content')
let search_input=document.getElementById('search_input')
let search_container=document.querySelector('.result_box ul')
let search_box=document.querySelector('#search_section header')
let show_detail=document.querySelector('.result_show_detail')
let backward_btn=document.querySelector('.backward_btn')
let nav_tracer=document.querySelector('.nav_tracer')
let detail_content=document.querySelector('.detail_content')
let trending_container=document.querySelector('.trending_container')
let timeout;
let delay=1500;
////////////////// close button
document.querySelectorAll('.close_btn').forEach(item=>{
    item.addEventListener('click',()=>{window.close()})
})

//////////////////// tab
const tabContentChange = index => {
  document.querySelectorAll('#tab_content section').forEach(item=>{
      item.style.cssText='opacity:0;visibility: hidden'
  })
  tab_content.children[index].style.cssText='opacity:1;visibility: visible'
}
document.querySelectorAll('.tab').forEach((item,index)=>{
    item.addEventListener('click',e=>{
        tabContentChange(index)
        if(index ===1){
            tab_tracer.style.left="184px"
        }else if(index===0){
            tab_tracer.style.left="0px"
            tab_content.children[0].style.overflowY='scroll'
        }
    })
})

/////////////////// navbar
const hideSection = index => {
  document.querySelectorAll('.section_item').forEach(item=>{
      item.style.opacity='0'
      item.style.visibility='hidden'
  })
    document.querySelector('.section_container').children[index].style.opacity='1'
    document.querySelector('.section_container').children[index].style.visibility='visible'
}
document.querySelectorAll('.nav_item').forEach((nav,index)=>{
    nav.addEventListener('click',e=>{
        hideSection(index)
        switch (index) {
            case 0:{
                nav_tracer.style.left='10%'
                document.querySelector('#home_section').style.zIndex='15'
            }
            break
            case 1:{
                document.querySelector('#home_section').style.zIndex='-1'
                nav_tracer.style.left='45%'
            }
            break
            case 2:{
                nav_tracer.style.left='78%'
            }
        }
    })
})

///////////////////// search input
search_input.addEventListener('keyup',e=>{
    if(timeout){
       clearTimeout(timeout)
    }
    timeout=setTimeout(()=>{
        searchAction(e)
    },delay)
})
const searchAction = (e) => {
    let value=e.target.value.toLowerCase()
    if(isNaN(value)){
        api.fetchAllData().
        then(response=>{
            return response.filter(coin=>{
                return coin.name.toLowerCase().startsWith(value.trim())
            })
        }).
        then(target=>showSearchResult(target)).
        catch(err=>{
            console.log(err)
        })
    }else{
        search_container.innerHTML=''
        search_box.classList.remove('active')
    }
}
const showSearchResult = target => {
    if(target.length > 0) {
        search_container.innerHTML = ''
        search_box.classList.add('active')
        let allResult = target.map(coin => {
            return `<li data-id="${coin.id}" class="px-4 d-flex align-items-center gap-2 pointer blue-hover"><img src="${coin.image}" width="20" alt="">${coin.id}</li>`
        }).join('')
        search_container.insertAdjacentHTML('beforeend', allResult)
    }else{
        search_container.innerHTML=''
        search_box.classList.remove('active')
    }
}
backward_btn.addEventListener('click',e=>{
    detail_content.innerHTML=''
    trending_container.style.display='grid'
    show_detail.style.cssText='opacity:0;visibility:hidden;z-index:-1'
    document.querySelector('#home_section').style.zIndex='1'
    document.querySelector('.result_box').style.zIndex='1'
    document.querySelector('#search_section main').style.overflowY='auto'
})

const showDetailChanges = () => {
    trending_container.style.display='none'
    detail_content.innerHTML=''
    document.querySelector('#home_section').style.zIndex='-1'
    show_detail.style.cssText='opacity:1;visibility:visible;z-index:9;overflow:auto'
    document.querySelector('.result_box').style.zIndex='10'
    document.querySelector('#search_section main').style.overflowY='hidden'
    search_input.value=''
    search_container.innerHTML=''
    search_box.classList.remove('active')
}

search_container.addEventListener('click',e=>{
    if(e.target.tagName==='LI'){
       showDetailChanges()
        api.fetchSingleData(e.target.dataset.id).
        then(response=>showDetail(response)).
        catch(err=>{
            console.log(err)
        })
    }
})


const showDetail = data => {
    let {
        image:coin_images,
        name:coin_name,
        symbol:coin_symbol,
        categories:coin_categories,
        market_data:coin_market,
        links:coin_links
    }=data
    let element=`<detail-card
                    img="${coin_images.small}"
                    name="${coin_name}"
                    symbol="${coin_symbol}"
                    category="${coin_categories[0]}"
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

    detail_content.insertAdjacentHTML('beforeend',element)


}