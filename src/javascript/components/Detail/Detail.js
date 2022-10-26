import Helper from "../Helper/Helper.js";
import Api from "../Api/Api.js";
import Storage from "../Storage/Storage.js";
import {removeNotification} from "../../background";
///////////////////////////////////////////////
let helper=new Helper()
let api=new Api()
let storage=new Storage()
///////////////////////////////////////

let temp=document.createElement('template')
temp.innerHTML=`
<link rel="stylesheet" href="./css/component.css">
 <div class="detail_card rounded-1 d-flex flex-column justify-content-center align-items-center px-3 py-4 pointer">
                        <div class="d-flex flex-row pb-3 gap-4 justify-content-center w-100 align-items-center border-bottom border-secondary border-1">
                            <img src="" width="80" alt="">
                            <div class="d-flex flex-column gap-1">
                                <span class="fs-08 text-dark"><i class="bi bi-coin me-2"></i>Name: <span class="name  text-muted"></span> </span>
                                <span class="fs-08 text-dark"><i class="bi bi-braces me-2"></i>Symbol: <span class="symbol text-muted"></span> </span>
                                <span class="fs-08 text-dark"><i class="bi bi-tag me-2"></i>Category: <span class=" text-muted category"></span> </span>
                                <span class="fs-08 text-dark d-flex align-items-center "><i class="bi bi-box2  me-2"></i>Max supply: <span class="text-muted supply"></span></span>
                                <span class="fs-08 text-dark d-flex align-items-center "><i class="bi bi-basket3  me-2"></i>Max volume: <span class="text-muted volume"></span></span>
                            </div>

                        </div>
                        <div  class="p-2 w-100">
                            <h6 class="text-start">Price details:</h6>
                            <div class="row py-2">
                                <div class="col-4">
                                    <span class="fs-08 text-dark d-flex align-items-center"><i class="bi bi-cash-coin me-2"></i> price: <span class="text-green current"></span></span>
                                </div>
                                <div class="col-8 d-flex justify-content-end">
                                    <span class="fs-08 text-dark d-flex align-items-center"><i class="bi bi-bank me-2"></i> Market cap: <span class="text-green market"></span></span>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="row">
                                <div class="col-6 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center my-2"><i class="bi bi-graph-up text-green me-2"></i>ATH: <span class="text-green ath"></span></span>
                                </div>
                                <div class="col-6 d-flex ">
                                    <span class="fs-08 text-dark d-flex align-items-center my-2"><i class="bi bi-graph-down me-2 text-red"></i>ATL: <span class="text-red atl"></span></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-07 text-dark d-flex align-items-center my-2"><i class="bi bi-percent text-green me-2"></i>ATH change: <span class="text-green ath-c"></span></span>
                                </div>
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-07 text-dark d-flex align-items-center my-2"><i class="bi bi-percent text-red me-2"></i>ATL change: <span class="text-red atl-c"></span></span>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="row">
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center my-2"><i class="bi bi-thermometer-high text-green me-2"></i>24h high: <span class="text-green h-24"></span></span>
                                </div>
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center my-2"><i class="bi bi-thermometer-low text-red me-2"></i>24h low: <span class="text-red l-24"></span></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-07 text-dark d-flex align-items-center my-2 "><i class="bi bi-currency-dollar text-green me-1"></i>24h price change: <span class="text-green c-24"></span></span>
                                </div>
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-07 text-dark d-flex align-items-center my-2 "><i class="bi bi-percent text-red me-1"></i>24h percent change: <span class="text-red p-24"></span></span>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="row">
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center my-2">Blockchain site:
                                        <a class="ms-1 block-link" href=""></a>
                                    </span>
                                </div>
                                <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center mt-2">Homepage:
                                        <a class="ms-1 home-link" href=""></a>
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center">
                                        <button class="follow_btn border-0 bg-dark-light text-light mt-4 mb-2 pointer">
                                            Follow
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"              class="bi bi-heart-fill mx-1 " viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
`

let root;

class Detail extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
        let {shadowRoot:main}=this
        root=main
    }
    connectedCallback(){
        root.querySelector('.follow_btn').setAttribute('data-id',this.getAttribute('coin-id'))
        root.querySelector('img').src=this.getAttribute('img')
        root.querySelector('.name').innerHTML=this.getAttribute('name')
        root.querySelector('.symbol').innerHTML=this.getAttribute('symbol')
        root.querySelector('.category').innerHTML=this.getAttribute('category')
        root.querySelector('.supply').innerHTML=this.getAttribute('supply')
        root.querySelector('.volume').innerHTML=this.getAttribute('volume')
        root.querySelector('.current').innerHTML=this.getAttribute('current')
        root.querySelector('.market').innerHTML=this.getAttribute('market')
        root.querySelector('.ath').innerHTML=this.getAttribute('ath')
        root.querySelector('.atl').innerHTML=this.getAttribute('atl')
        root.querySelector('.ath-c').innerHTML=this.getAttribute('ath-c')
        root.querySelector('.atl-c').innerHTML=this.getAttribute('atl-c')
        root.querySelector('.h-24').innerHTML=this.getAttribute('h-24')
        root.querySelector('.l-24').innerHTML=this.getAttribute('l-24')
        root.querySelector('.c-24').innerHTML=this.getAttribute('c-24')
        root.querySelector('.p-24').innerHTML=this.getAttribute('p-24')
        root.querySelector('.block-link').innerHTML=this.getAttribute('block-link')
        root.querySelector('.block-link').href=this.getAttribute('block-link')
        root.querySelector('.home-link').innerHTML=this.getAttribute('home-link')
        root.querySelector('.home-link').href=this.getAttribute('home-link')
        root.querySelector('.block-link').addEventListener('click',this.linkRedirect)
        root.querySelector('.home-link').addEventListener('click',this.linkRedirect)
        this.choosen=this.getAttribute('is_choosen')
        // >>>>>>>>>>>>>>>>>>>>>> events <<<<<<<<<<<<<<<<<<<<<<<<<<
        root.querySelector('.follow_btn').addEventListener('click',this.followingHandler)
    }

    set choosen(value){
        if(value==='yes'){
            this.shadowRoot.querySelector('.follow_btn').classList.replace('bg-dark-light','bg-green')
            this.shadowRoot.querySelector('.follow_btn').innerHTML=`Following${helper.checkSvg}`
        }
    }

    get observedAttributes(){
        return []
    }
    linkRedirect=e=>{
        window.open(e.target.innerHTML)
    }
    followingHandler=e=>{
        if(e.target.tagName==='BUTTON' && window.isLogin){
            let coinId=e.target.dataset.id
            if(e.target.classList.contains('bg-dark-light') && !window.favArray.includes(coinId)){
                e.target.classList.replace('bg-dark-light','bg-green')
                e.target.innerHTML=`Following${helper.checkSvg}`
                window.favArray.push(coinId)
                api.addToFollowing(coinId,window.favArray)
            }else if(e.target.classList.contains('bg-green')){
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

}

export default Detail