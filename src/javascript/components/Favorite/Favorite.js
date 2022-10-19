class Favorite {
    constructor() {
        this.login_redirection_btn=document.querySelector('.login_redirection')
        this.nav_tracer=document.querySelector('.nav_tracer')
        this.login_redirection_modal=document.querySelector('.login_redirection_modal')
        this.init()
    }
    init(){
        this.login_redirection_btn.addEventListener('click',this.redirectHandler)
        this.login_redirection_modal.addEventListener('click',this.modalRedirect)
    }
    modalRedirect=()=>{
        document.querySelector('.alert_modal').style.cssText='opacity: 0;visibility: hidden'
        document.querySelector('.overlay').style.cssText='opacity: 0;visibility: hidden'
        this.hideSection(2)
        this.nav_tracer.style.left='78%'
    }
    redirectHandler=()=>{
        this.hideSection(2)
        this.nav_tracer.style.left='78%'
    }
    hideSection = index => {
        document.querySelectorAll('.section_item').forEach(item=>{
            item.style.opacity='0'
            item.style.visibility='hidden'
        })
        document.querySelector('.section_container').children[index].style.opacity='1'
        document.querySelector('.section_container').children[index].style.visibility='visible'
    }
}

export default Favorite