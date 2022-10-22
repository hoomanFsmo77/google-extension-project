class Tab {
    constructor() {
        this.tab_content=document.getElementById('tab_content')
        this.tab_tracer=document.querySelector('.tab_tracer')
        this.tab_content=document.getElementById('tab_content')
        this.init()
    }
    init(){
        document.querySelectorAll('.tab').forEach((item,index)=>{
            item.addEventListener('click',()=>{
                this.changePositionHandler(index)
            })
        })
    }

    changePositionHandler=index=>{
        this.tabContentChange(index)
        if(index ===1){
            this.tab_tracer.style.left="184px"
        }else if(index===0){
            this.tab_tracer.style.left="0px"
            this.tab_content.children[0].style.overflowY='scroll'
        }
    }

    tabContentChange =index=>{
        document.querySelectorAll('#tab_content section').forEach(item=>{
            item.style.cssText='opacity:0;visibility: hidden'
        })
        this.tab_content.children[index].style.cssText='opacity:1;visibility: visible'
    }

}
export default Tab