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
            <div class="add_to_favorite">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-muted " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
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
        root.querySelector('img').src=this.getAttribute('icon')
        root.querySelector('.coin_name').children[0].innerHTML=this.getAttribute('coin-name')
        root.querySelector('.coin_name').children[1].innerHTML=this.getAttribute('abb-name')
        root.querySelector('.price').innerHTML=this.getAttribute('price')
        this.state=this.getAttribute('state')
        root.querySelector('.change_percent').innerHTML=this.getAttribute('change-state')
        root.querySelector('.add_to_favorite').addEventListener('click',this.clickHandler)
    }
    clickHandler=e=>{
        document.querySelector('.alert_modal').style.cssText='opacity: 1;visibility: visible'
        document.querySelector('.overlay').style.cssText='opacity: 1;visibility: visible'
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

    get observedAttributes(){
        return ['icon','coin-name','abb-name',' price','state','change-state']
    }
}
export  default Card