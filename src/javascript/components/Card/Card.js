import Api from "../Api/Api.js";
import {createNotification,removeNotification} from "../../background.js";
import Storage from "../Storage/Storage.js";
import Helper from "../Helper/Helper.js";
//////////////////////////// instances ///////////////////////////
let api=new Api()
let storage=new Storage()
let helper=new Helper()
//////////////////////// helpers ///////////////////////
window.favArray=[]
window.alertCoin=[]
let fav_content=document.querySelector('.fav_content')
let login_content=document.querySelector('.login_content')
let price_alert_modal=document.querySelector('.price_alert_modal')
let overlay=document.querySelector('.overlay')
let api_message=document.querySelector('.api_message')
///////////////////// custom element //////////////////////

let temp=document.createElement('template')
temp.innerHTML=`
        <link rel="stylesheet" href="./css/component.css">
        <div class="crypto_card mb-3  p-3  mx-4 py-3 rounded-1 pointer d-flex justify-content-between align-items-center position-relative">
            <div class="d-flex align-items-center gap-2">
                <img src="" width="30" alt="">
                <div>
                <p class="out_trending_message d-none text-center fs-07 m-0 lh-sm text-muted" >This coin is out of trending coins now.</p>
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
  <path class="path_2" d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                 </svg>
            </div>
            <i class="bi bi-x position-absolute remove_btn d-none m-1 text-light d-flex p-1 rounded-circle bg-red"></i>
        </div>
       

`

let root;
class Card extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
        let {shadowRoot:main}=this
        root=main
    }
// >>>>>>>>>>>>>>>>>>> life cycles <<<<<<<<<<<<<<<<<<<<<<

    connectedCallback(){
        root.querySelector('img').src=this.getAttribute('icon')
        root.querySelector('.coin_name').children[0].innerHTML=this.getAttribute('coin-name')
        root.querySelector('.coin_name').children[1].innerHTML=this.getAttribute('abb-name')
        root.querySelector('.price').innerHTML=this.getAttribute('price')
        this.state=this.getAttribute('state')
        this.ring=this.getAttribute('has-ring')
        root.querySelector('.change_percent').innerHTML=this.getAttribute('change-state')
        root.querySelector('.add_to_favorite path.path_1').setAttribute('data-id',this.getAttribute('coin-id'))
        root.querySelector('.add_to_favorite path.path_2').setAttribute('data-id',this.getAttribute('coin-id'))
        // >>>>>>>>>>>>>>>>> event listeners  <<<<<<<<<<<<<<<<<<<<<
        root.querySelector('.add_to_favorite path.path_1').addEventListener('click',this.addToFavoriteHandler)
        root.querySelector('.add_to_favorite path.path_2').addEventListener('click',this.addToAlertListHandler)
        root.querySelector('.remove_btn').addEventListener('click',this.removeOutOfTrendingCoinHandler)
    }
    attributeChangedCallback(name,oldValue,newValue){
        if(newValue==='no'){
            this.remove()
            if(fav_content.children.length===0){
                fav_content.classList.replace('d-flex','d-none')
                login_content.classList.replace('d-none','d-flex')
            }else{
                login_content.classList.replace('d-flex','d-none')
                fav_content.classList.replace('d-none','d-flex')
            }
        }
        if(name==='out-trending' && newValue==='yes'){
            this.shadowRoot.querySelector('.out_trending_message').classList.replace('d-none','d-block')
            this.shadowRoot.querySelector('.remove_btn').classList.replace('d-none','d-block')
        }
    }
    static get observedAttributes(){
        return ['show','out-trending']
    }

    removeOutOfTrendingCoinHandler=e=>{
        let coinId=this.getAttribute('coin-id')
        this.setAttribute('show','no')
        helper.removeFavWindow(coinId)
        storage.setData(window.alertCoin)
        removeNotification(coinId)
        api.updateUserInfo(window.favArray)
    }


// >>>>>>>>>>>>>>> add and remove favorite btn event <<<<<<<<<<<<<<<<<<<<<<<
    addToFavoriteHandler=e=>{
        e.stopPropagation()
        let coinId=e.target.dataset.id
        if(window.isLogin){
            if(e.target.parentElement.classList.contains('text-muted') && !window.favArray.includes(coinId)){
                e.target.parentElement.classList.replace('text-muted','text-green')
                window.favArray.push(coinId)
               api.addToFollowing(coinId,window.favArray)
            }else if(window.favArray.includes(coinId) && e.target.parentElement.classList.contains('text-green')){
                e.target.parentElement.classList.replace('text-green','text-muted')
                helper.removeFavWindow(coinId)
                api.removeFavoriteCoin(coinId)
                storage.setData(window.alertCoin)
                removeNotification(coinId)
            }
            storage.setData(window.favArray,storage.favList)
            api.updateUserInfo(window.favArray)
        }else{
            document.querySelector('.alert_modal').style.cssText='opacity: 1;visibility: visible'
            document.querySelector('.overlay').style.cssText='opacity: 1;visibility: visible'
        }
    }



// >>>>>>>>>>>>>>>>>>  add to alert list btn event <<<<<<<<<<<<<<<<<
    addToAlertListHandler=e=>{
        let {target:elm}=e
        let coinId=elm.dataset.id
        if(e.target.parentElement.classList.contains('text-muted')){
            e.target.parentElement.classList.replace('text-muted','text-red')
            this.modalAction(`Alert created!<br>We will notify you every ${document.querySelector('#interval').value} minutes. `)
            window.alertCoin.push(coinId)
            storage.setData(window.alertCoin)
            createNotification(coinId)
        }else if(e.target.parentElement.classList.contains('text-red')){
            e.target.parentElement.classList.replace('text-red','text-muted')
            this.modalAction('Alert removed!')
            window.alertCoin.splice(window.alertCoin.indexOf(coinId),1)
            storage.setData(window.alertCoin)
            removeNotification(coinId)
        }
        api.getSpecificUser(helper.extractToken).
        then(response=>this.updateUserAlertCoin(response,window.alertCoin)).
        catch(err=>{
            console.warn(`error in card.js / line 134 / add to alert list and status error code ${err}`)
            helper.showError()
        })
    }
    updateUserAlertCoin(result,alertArray){
        helper.hideError()
        let newData={
            email:result.email,
            password:result.password,
            fav:result.fav,
            alert:alertArray
        }
        api.updateUser(helper.extractToken,newData).then(response=>{
            // console.log(response)
        }).
        catch(err=>{
            console.warn(`error in card.js / line 172 / add to alert list and status error code ${err}`)
            helper.showError()
        })
    }

 // >>>>>>>>>>>>>>>>>> helpers <<<<<<<<<<<<<<<<<<<<<<
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
    modalAction(title){
        price_alert_modal.style.cssText='opacity: 1;visibility: visible'
        overlay.style.cssText='opacity: 1;visibility: visible'
        price_alert_modal.children[0].innerHTML=title
    }
}


export default Card