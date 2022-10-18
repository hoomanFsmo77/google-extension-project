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
let nav_tracer=document.querySelector('.nav_tracer')
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
            }
            break
            case 1:{
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
let search_input=document.getElementById('search_input')
let search_container=document.querySelector('.result_box ul')
let search_box=document.querySelector('#search_section header')
let timeout;
let delay=1500;
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
            return `<li class="px-4 d-flex align-items-center gap-2 pointer blue-hover"><img src="${coin.image}" width="20" alt="">${coin.id}</li>`
        }).join('')
        search_container.insertAdjacentHTML('beforeend', allResult)
    }else{
        search_container.innerHTML=''
        search_box.classList.remove('active')
    }

}

