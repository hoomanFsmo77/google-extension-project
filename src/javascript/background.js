import Storage from "./components/Storage/Storage";
let storage=new Storage()
let interval;
let timerContainer=[]

const init = () => {

}


const createNotification = (title,message,time,coinId) => {
    interval =setInterval(()=>{
        new Notification(`${title}`,{
            icon:'./assets/logo_32.png',
            body:message
        })
    },time*1000)
    timerContainer.push({
        name:coinId,
        timer:interval
    })
}
const removeNotification = (coinId) => {
    let targetIndex=timerContainer.findIndex(item=>{
        return item.name===coinId
    })
    clearInterval(timerContainer[targetIndex].timer)
    timerContainer.splice(targetIndex,1)
}



init()
export {createNotification,removeNotification}