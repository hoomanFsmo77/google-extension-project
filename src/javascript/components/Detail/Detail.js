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
                        </div>
                    </div>
`

class Detail extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector('img').src=this.getAttribute('img')
        this.shadowRoot.querySelector('.name').innerHTML=this.getAttribute('name')
        this.shadowRoot.querySelector('.symbol').innerHTML=this.getAttribute('symbol')
        this.shadowRoot.querySelector('.category').innerHTML=this.getAttribute('category')
        this.shadowRoot.querySelector('.supply').innerHTML=this.getAttribute('supply')
        this.shadowRoot.querySelector('.volume').innerHTML=this.getAttribute('volume')
        this.shadowRoot.querySelector('.current').innerHTML=this.getAttribute('current')
        this.shadowRoot.querySelector('.market').innerHTML=this.getAttribute('market')
        this.shadowRoot.querySelector('.ath').innerHTML=this.getAttribute('ath')
        this.shadowRoot.querySelector('.atl').innerHTML=this.getAttribute('atl')
        this.shadowRoot.querySelector('.ath-c').innerHTML=this.getAttribute('ath-c')
        this.shadowRoot.querySelector('.atl-c').innerHTML=this.getAttribute('atl-c')
        this.shadowRoot.querySelector('.h-24').innerHTML=this.getAttribute('h-24')
        this.shadowRoot.querySelector('.l-24').innerHTML=this.getAttribute('l-24')
        this.shadowRoot.querySelector('.c-24').innerHTML=this.getAttribute('c-24')
        this.shadowRoot.querySelector('.p-24').innerHTML=this.getAttribute('p-24')
        this.shadowRoot.querySelector('.block-link').innerHTML=this.getAttribute('block-link')
        this.shadowRoot.querySelector('.block-link').href=this.getAttribute('block-link')
        this.shadowRoot.querySelector('.home-link').innerHTML=this.getAttribute('home-link')
        this.shadowRoot.querySelector('.home-link').href=this.getAttribute('home-link')
        this.shadowRoot.querySelector('.block-link').addEventListener('click',this.linkRedirect)
        this.shadowRoot.querySelector('.home-link').addEventListener('click',this.linkRedirect)

    }
    get observedAttributes(){
        return []
    }
    linkRedirect=e=>{
        window.open(e.target.innerHTML)
    }

}

export default Detail