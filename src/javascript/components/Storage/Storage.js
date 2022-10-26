class Storage {
    constructor() {
        this.favList='_ext_fav_'
        this.alertList='_ext_alert_'
        this.timerList='_ext_timer_'
    }
    setData(data,name=this.alertList){
        localStorage.setItem(name,JSON.stringify(data))
    }
     getData(name=this.alertList){
        if(localStorage.getItem(name)){
            return JSON.parse(localStorage.getItem(name))
        }
    }
}

export default Storage