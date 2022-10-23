class Storage {
    constructor() {
        this.name='_ext_coin_'
        this.alertList='_ext_alert_'
    }
    setData(data,name=this.name){
        localStorage.setItem(name,JSON.stringify(data))
    }
     getData(name=this.name){
        if(localStorage.getItem(name)){
            return JSON.parse(localStorage.getItem(name))
        }
    }
}

export default Storage