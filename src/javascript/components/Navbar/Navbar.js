class Navbar {
    constructor() {
        this.nav_tracer=document.querySelector('.nav_tracer')
        this.section_items=document.querySelectorAll('.section_item')
        this.section_container=document.querySelector('.section_container')
        this.home_section=document.querySelector('#home_section')
        this.user_section=document.querySelector('#user_section')
        this.init()
    }
    init(){
        document.querySelectorAll('.nav_item').forEach((nav,index)=>{
            nav.addEventListener('click',()=>{
               this.changePosition(index)
            })
        })
    }
    hideSection=index=>{
        this.section_items.forEach(item=>{
            item.style.opacity='0'
            item.style.visibility='hidden'
        })
        this.section_container.children[index].style.opacity='1'
        this.section_container.children[index].style.visibility='visible'
    }
    changePosition=index=>{
        this.hideSection(index)
        switch (index) {
            case 0:{
                this.nav_tracer.style.left='10%'
                this.home_section.style.zIndex='15'
            }
                break
            case 1:{
                this.home_section.style.zIndex='-1'
                this.nav_tracer.style.left='45%'
            }
                break
            case 2:{
                this.home_section.style.zIndex='15'
                this.nav_tracer.style.left='78%'
            }
        }
    }
}
export default Navbar