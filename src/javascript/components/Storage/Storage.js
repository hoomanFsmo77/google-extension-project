class Storage {
    constructor() {
        this.name='_ext_coin_'
    }
    createData(data){
        localStorage.setItem(this.name,JSON.stringify(data))
    }
    get getData(){
        if(localStorage.getItem(this.name)){
            return JSON.parse(localStorage.getItem(this.name))
        }
    }
}

export default Storage