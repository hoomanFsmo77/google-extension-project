import Api from "../Api/Api.js";
import {removeNotification} from "../../background";
import Storage from "../Storage/Storage.js";
import Helper from "../Helper/Helper.js";
//////////////////////////////////
let api=new Api()
let storage=new Storage()
let helper=new Helper()
///////////////////////////////////////////
let temp=document.createElement('template')
temp.innerHTML=`
<link rel="stylesheet" href="./css/component.css">
<div class="trending_card w-100 m-2 py-3 px-2 d-flex flex-column gap-2 align-items-center rounded-2 my-0" >
                    <div class="p-2 border border-secondary rounded-circle">
                        <img src="" width="40" class="img-fluid" alt="">
                    </div>
                    <div class="d-flex flex-column  justify-content-center align-items-center">
                       <span class="fs-6 fw-bold coin_name text-center"></span>
                        <span class="symbol text-green"></span>
                        <span class="text-muted  d-flex align-items-center price">
                            <span class="d-inline "></span>
                            <span class="d-inline mx-1 fs-09" >|</span>
                            <span class=" mx-1 rank"></span>
                        </span>
                        <button class="follow_btn border-0 bg-dark-light text-light mt-4 mb-2 pointer">
                             Follow
                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart-fill mx-1 " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>
                    </div>
                </div>

`
let root;
class Trending extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
        let {shadowRoot:main}=this
        root=main
    }
    connectedCallback(){
        root.querySelector('img').src=this.getAttribute('icon')
        root.querySelector('.coin_name').innerHTML=this.getAttribute('coin-name')
        root.querySelector('.symbol').innerHTML=this.getAttribute('abb-name')
        root.querySelector('.price').children[0].innerHTML=this.getAttribute('current-price')
        root.querySelector('.rank').innerHTML='Rank:' + this.getAttribute('rank')
        root.querySelector('.follow_btn').setAttribute('data-id',this.getAttribute('coin-name'))
        /////////////////////// events handler
        root.querySelector('.follow_btn').addEventListener('click',this.followingHandler)

    }
    followingHandler=e=>{
        if(e.target.tagName==='BUTTON' && window.isLogin){
            let coinId=e.target.dataset.id
            if(e.target.classList.contains('bg-dark-light') && !window.favArray.includes(coinId)){
                ///// start following
                e.target.classList.replace('bg-dark-light','bg-green')
                e.target.innerHTML=`Following${helper.checkSvg}`
                window.favArray.push(coinId)
                api.addToFollowing(coinId,window.favArray)

            }else if(e.target.classList.contains('bg-green')){
                ///// end following
                e.target.classList.replace('bg-green','bg-dark-light')
                e.target.innerHTML=`Follow${helper.heartSvg}`
                helper.removeFavWindow(coinId)
                api.removeFavoriteCoin(coinId)
                storage.setData(window.alertCoin)
                removeNotification(coinId)
            }

            api.updateUserInfo(window.favArray)
        }
    }


    get observedAttributes(){
        return ['coin-name','abb-name','current-price','icon','rank']
    }
}

export default Trending