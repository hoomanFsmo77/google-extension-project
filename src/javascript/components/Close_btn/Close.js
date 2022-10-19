class Close {
    constructor() {
        this.init()
    }
    init(){
        document.querySelectorAll('.close_btn').forEach(item=>{
            item.addEventListener('click',()=>{window.close()})
        })
    }
}

export default Close