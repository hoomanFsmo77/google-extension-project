import Api from "../Api/Api.js";
let api=new Api()
window.favArray=[]
let fav_content=document.querySelector('.fav_content')
let login_content=document.querySelector('.login_content')

let temp=document.createElement('template')
temp.innerHTML=`
<link rel="stylesheet" href="./css/component.css">
        <div class="crypto_card mb-3  p-3  mx-4 py-3 rounded-1 pointer d-flex justify-content-between align-items-center ">
            <div class="d-flex align-items-center gap-2">
                <img src="" width="30" alt="">
                <div>
                    <span class="coin_name d-block "><span class="fw-bold fs-09"></span> <span class="text-green  mx-1"></span></span>
                    <span class="text-muted  price  d-inline"></span> <span class="d-inline text-muted fs-09">|</span>
                    <span class="d-inline ">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-down text-red d-none" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                    
                     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-up text-green d-none " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                    
                    
                    <span class="  change_percent"></span>
                </span>
                </div>
            </div>
            <div  class="add_to_favorite position-relative">
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-muted  position-absolute " viewBox="0 0 16 16">
                    <path class="path_1" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill text-muted position-absolute d-none " viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                 </svg>
            </div>
        </div>

`

let root=null

class Card extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
        let {shadowRoot:main}=this
        root=main
    }
    connectedCallback(){
        console.log(window.favArray)
        root.querySelector('img').src=this.getAttribute('icon')
        root.querySelector('.coin_name').children[0].innerHTML=this.getAttribute('coin-name')
        root.querySelector('.coin_name').children[1].innerHTML=this.getAttribute('abb-name')
        root.querySelector('.price').innerHTML=this.getAttribute('price')
        this.state=this.getAttribute('state')
        this.ring=this.getAttribute('has-ring')
        root.querySelector('.change_percent').innerHTML=this.getAttribute('change-state')
        root.querySelector('.add_to_favorite path.path_1').setAttribute('data-id',this.getAttribute('coin-id'))
        root.querySelector('.add_to_favorite path.path_1').addEventListener('click',this.clickHandler)
    }
    clickHandler=e=>{
        e.stopPropagation()
        let coinId=e.target.dataset.id
        if(window.isLogin){
            if(e.target.parentElement.classList.contains('text-muted') && !window.favArray.includes(coinId)){
                e.target.parentElement.classList.replace('text-muted','text-green')
                window.favArray.push(coinId)
                console.log(window.favArray)
                api.fetchSingleData(coinId).then(response=>this.addToFollowing(response))
                api.getSpecificUser(this.extractToken).then(response=>this.updateUserHandler(response)).
                catch(err=>console.log(err))
            }else{
                e.target.parentElement.classList.replace('text-green','text-muted')
            }
        }else{
            document.querySelector('.alert_modal').style.cssText='opacity: 1;visibility: visible'
            document.querySelector('.overlay').style.cssText='opacity: 1;visibility: visible'
        }
    }
    addToFollowing=result=>{
        if(window.favArray.length===1){
            fav_content.classList.replace('d-none','d-flex')
            login_content.classList.replace('d-flex','d-none')
        }
        let {
            image:coin_images,
            name:coin_name,
            symbol:coin_symbol,
            market_data:coin_market,
        }=result
        let element=`<price-card has-ring="yes" icon="${coin_images.small}"  coin-id="${result.id}" coin-name="${coin_name}" abb-name="${(coin_symbol).toUpperCase()}"
                    price="${coin_market?.current_price.usd} $" state="${`${coin_market?.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'}"  change-state="${coin_market?.price_change_percentage_24h.toFixed(2) +'%'}"
                ></price-card>`
        fav_content.insertAdjacentHTML('beforeend',element)
    }
    updateUserHandler =response=>{
        let newData={
            email:response.email,
            password:response.password,
            fav:window.favArray
        }
        api.updateUser(this.extractToken,newData).then(response=>{
            // console.log(response)
        }).
         catch(err=>{
            console.log(err)
        })
    }
    get extractToken(){
        return document.cookie.slice(document.cookie.indexOf('=')+1)
    }
    set state(value){
        if(value==='up'){
            root.querySelector('.change_percent').classList.add('text-green')
            root.querySelector('.bi-arrow-up').classList.replace('d-none','d-inline-block')
        }else if(value==='down'){
            root.querySelector('.change_percent').classList.add('text-red')
            root.querySelector('.bi-arrow-down').classList.replace('d-none','d-inline-block')
        }
    }
    set ring(value){
        if(value==='yes'){
            root.querySelector('.bi-heart-fill').classList.add('d-none')
            root.querySelector('.bi-bell-fill').classList.replace('d-none','d-block')
            root.querySelector('.crypto_card').style.width='300px'
        }
    }
    get observedAttributes(){
        return ['icon','coin-name','abb-name',' price','state','change-state','coin-id','has-ring']
    }
}


export  default Card