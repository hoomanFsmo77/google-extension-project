class Navbar {
    constructor() {
        this.nav_tracer=document.querySelector('.nav_tracer')
        this.init()
    }
    init(){
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
                        this.nav_tracer.style.left='10%'
                        document.querySelector('#home_section').style.zIndex='15'
                    }
                        break
                    case 1:{
                        document.querySelector('#home_section').style.zIndex='-1'
                        this.nav_tracer.style.left='45%'
                    }
                        break
                    case 2:{
                        this.nav_tracer.style.left='78%'
                    }
                }
            })
        })

    }
}
export default Navbar