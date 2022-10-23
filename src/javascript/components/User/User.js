import Api from "../Api/Api.js";
import Storage from "../Storage/Storage.js";
import {createNotification,removeAllAlerts} from "../../background.js";
//////////////////////////////
let storage=new Storage()
let api=new Api()


class User {
    constructor() {

        // >>>>>>>> user section tags <<<<<<<<<<
        this.form=document.querySelector('#form')
        this.submit_btn=document.querySelector('.submit_btn')
        this.emailInput=document.getElementById('email')
        this.passwordInput=document.getElementById('password')
        this.home_redirect_btn=document.querySelector('.home_redirect_btn')
        this.logout_btn=document.querySelector('.logout_btn')
        this.toggler=document.querySelector('.toggler')
        this.statusTag=document.querySelector('.status')


        // >>>>>>>>>>>>>>> home section tags  <<<<<<<<<<<<<
        this.nav_tracer=document.querySelector('.nav_tracer')
        this.alert_message=document.querySelector('.alert_message')
        this.fav_content=document.querySelector('.fav_content')
        this.login_content=document.querySelector('.login_content')
        this.alert_close=document.querySelector('.alert_close')

        // >>>>>>>> sections <<<<<<<<<
        this.following_section=document.querySelector('#following')
        this.user_section=document.querySelector('#user_section')
        this.section_container= document.querySelector('.section_container')
        this.container=document.getElementById('popular')
        this.home_section=document.querySelector('#home_section')
        this.trendingContainer=document.querySelector('.trending_container')

        // >>>>>>> regex <<<<<<<<
        this.emailRegex=/^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/
        this.passwordRegex=/^([0-9A-Za-z\#\$\@\*\!]{8,16})$/

        // >>>>>>> helper <<<<<<<
        this.isToggle=false
        this.validArray=[
            {email:false},
            {password:false}
        ]
        // >>>>>>>>>>> initializing all events <<<<<<<<<<<
        this.init()
    }
    init(){
        this.toggler.addEventListener('click',this.statusToggler)
        this.form.addEventListener('submit',this.formHandler)
        this.emailInput.addEventListener('keyup',this.emailHandler)
        this.passwordInput.addEventListener('keyup',this.passwordHandler)
        this.home_redirect_btn.addEventListener('click',this.homeRedirection)
        this.logout_btn.addEventListener('click',this.logoutHandler)
        this.alert_close.addEventListener('click',this.closeModal)
        this.checkRegistration()
    }

    closeModal=()=>{
        document.querySelector('.price_alert_modal').style.cssText='opacity: 0;visibility: hidden'
        document.querySelector('.overlay').style.cssText='opacity: 0;visibility: hidden'
    }
// >>>>>>>>>>>>>>>>>> to do on page load func <<<<<<<<<<<<<<<<<<<<
    checkRegistration=()=>{
        if(document.cookie.includes('token')){
            window.isLogin=true
            api.getSpecificUser(this.extractToken).
            then(response=>{
                this.addUserFavorite(this.filterUserFavorite(response.fav,'fav'))
                this.actionOnTrendingList(this.filterUserFavorite(response.fav,'trend'))
                window.favArray=response?.fav ?? []
                window.alertCoin=response?.alert ?? []
                this.welcomePreparation(response.email)
            }).
            catch(err=>{
                console.warn(`error in user.js / line 70 / check registration and status error code ${err}`)
            })
        }else{
            window.favArray=[]
            window.alertCoin=[]
            window.isLogin=false
        }
    }
    addUserFavorite(data){
        this.fav_content.innerHTML=''
        let convertedData=[...new Set(data)]
        console.log(data)
        api.homeSection(convertedData,'yes',this.fav_content)
    }
    actionOnTrendingList=data=>{
        console.log(data)
        data.forEach(coinName=>api.fetchSingleCoin(coinName,true).then(response=>this.showTrendingList(response)))
    }
    showTrendingList=response=>{
        let {
            image:coin_image,
            id:coin_id,
            name:coin_name,
            symbol:coin_symbol,
            market_data:coin_info
        }=response
        let element=`
                <price-card icon="${coin_image.small}" is_alert="yse"  coin-id="${coin_id}" coin-name="${coin_name}" abb-name="${(coin_symbol).toUpperCase()}"
                    price="${coin_info.current_price.usd} $" state="${`${coin_info.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'}"  change-state="${coin_info.price_change_percentage_24h.toFixed(2) +'%'}"
                ></price-card>
        `
        this.fav_content.insertAdjacentHTML('beforeend',element)


    }


// >>>>>>>>>>>>>>>>>>> filter the user favorite coin array between the popular and trending for more specific info <<<<<<<<<
    filterUserFavorite(favArray,mode){
        let trendingAddedCoins=[...favArray]
        let favoriteAddedCoins=[]
        let i=0
        favArray.forEach(item=>{
            api.favoritCoin.forEach(coin=>{
                if(item===coin){
                    trendingAddedCoins.splice(favArray.indexOf(item)-i,1)
                    favoriteAddedCoins.push(item)
                    i++
                }
            })
        })
        if(mode==='fav'){
            return [...new Set(favoriteAddedCoins)]
        }else if(mode==='trend'){
            return  trendingAddedCoins
        }
    }


// >>>>>>>>>>>>>>> redirect button on user section funcs<<<<<<<<<<<<<<<<<<
    hideSection = index => {
        document.querySelectorAll('.section_item').forEach(item=>{
            item.style.opacity='0'
            item.style.visibility='hidden'
        })
        this.section_container.children[index].style.opacity='1'
        this.section_container.children[index].style.visibility='visible'
    }
    homeRedirection=()=>{
        this.hideSection(0)
        this.nav_tracer.style.left='10%'
        this.home_section.style.zIndex='15'
    }


// >>>>>>>>>>>>>>>>> logout funcs <<<<<<<<<<<<<<<<<<<
    logoutHandler=()=>{
        this.deleteCookie(10)
        this.clearInputs()
        this.iconDisappear()
        removeAllAlerts()
        storage.setData([])
        window.favArray=[]
        window.alertCoin=[]
        window.isLogin=false
        this.actionOnLogout()
        this.turnLinkedCoinToDefault()

    }
    actionOnLogout(){
        this.alert_message.classList.replace('d-block','d-none')
        this.submit_btn.setAttribute('disabled','')
        this.user_section.querySelector('main').style.display='block'
        this.user_section.querySelector('.welcome_page').classList.replace('d-block','d-none')
        this.user_section.querySelector('.bi-person-plus-fill').style.display='block'
        this.user_section.querySelector('.user_email').classList.replace('d-block','d-none')
        this.following_section.children[1].classList.replace('d-flex','d-none')
        this.following_section.children[2].classList.replace('d-flex','d-none')
        this.following_section.children[0].classList.replace('d-none','d-flex')
    }
    iconDisappear=()=>{
        this.submit_btn.parentElement.previousElementSibling.children[2].classList.replace('d-inline-block','d-none')
        this.submit_btn.parentElement.previousElementSibling.children[3].classList.replace('d-inline-block','d-none')
        this.submit_btn.parentElement.previousElementSibling.previousElementSibling.children[2].classList.replace('d-inline-block','d-none')
        this.submit_btn.parentElement.previousElementSibling.previousElementSibling.children[3].classList.replace('d-inline-block','d-none')
    }
    turnLinkedCoinToDefault(){
        this.container.querySelectorAll('price-card').forEach(card=>{
            card.shadowRoot.querySelector('.add_to_favorite').children[0].classList.replace('text-green','text-muted')
        })
    }

// >>>>>>>>>>>>>>>> cookie handler func <<<<<<<<<<<<<<<<<<<<<
    get extractToken(){
        return document.cookie.slice(document.cookie.indexOf('=')+1)
    }
    setCookie=(day,id)=>{
        let date=new Date()
        date.setTime(date.getTime() + (day *24*60*60*1000))
        document.cookie=`token=${id};path=/;expires=${date}`
    }
    deleteCookie=(day)=>{
        let date=new Date()
        date.setTime(date.getTime() - (day *24*60*60*1000))
        document.cookie=`token=;path=/;expires=${date}`
    }
// >>>>>>>>>>>>>>>>>> validation and form handler func on user sign up <<<<<<<<<<<<<<<<<<<<<
    passwordHandler=e=>{
        e.target.nextElementSibling.classList.replace('d-inline-block','d-none')
        e.target.nextElementSibling.nextElementSibling.classList.replace('d-inline-block','d-none')
        if(this.passwordRegex.test(e.target.value)){
            e.target.nextElementSibling.classList.replace('d-none','d-inline-block')
            this.validArray[1].password=true
        }else{
            e.target.nextElementSibling.nextElementSibling.classList.replace('d-none','d-inline-block')
            this.validArray[1].password=false
        }
        this.checkValidation()
    }
    emailHandler=e=>{
        e.target.nextElementSibling.classList.replace('d-inline-block','d-none')
        e.target.nextElementSibling.nextElementSibling.classList.replace('d-inline-block','d-none')
        if(this.emailRegex.test(e.target.value)){
            e.target.nextElementSibling.classList.replace('d-none','d-inline-block')
            this.validArray[0].email=true
        }else{
            e.target.nextElementSibling.nextElementSibling.classList.replace('d-none','d-inline-block')
            this.validArray[0].email=false
        }
        this.checkValidation()
    }
    checkValidation(){
        (this.validArray[0].email && this.validArray[1].password) ? this.submit_btn.removeAttribute('disabled') :
            this.submit_btn.setAttribute('disabled','')

    }
    formHandler=e=>{
        e.preventDefault()
        this.iconDisappear()
        if(this.submit_btn.getAttribute('data-status')==='sign_up'){
            document.querySelector('#user_section').querySelector('.pre_loader').classList.replace('d-none','d-flex')
            let userData={
                email:this.emailInput.value,
                password:this.passwordInput.value
            }
            api.createData(userData).
            then(response=>{
                window.isLogin=true
                this.welcomePreparation(this.emailInput.value)
                this.setCookie(10,response.name)
                this.clearInputs()
            }).
            catch(err=>{
                console.warn(`error in card.js / line 194 / form handler and status error code ${err}`)
                window.isLogin=false
            })
        }
        if(this.submit_btn.getAttribute('data-status')==='sign_in'){
           api.getAllUsers().
           then(response=>Object.entries(response)).
           then(result=>this.signInHandler(result)).
           catch(err=>{
               this.alert_message.classList.replace('d-none','d-block')
               console.warn(`error in user.js / line 204 / form handler and status error code ${err}`)
           })
        }
    }
    statusToggler=e=>{
        this.clearInputs()
        this.iconDisappear()
        this.alert_message.classList.replace('d-block','d-none')
        if(!this.isToggle){
            e.target.innerHTML='I have an account'
            this.statusTag.innerHTML='Sign up'
            this.submit_btn.setAttribute('disabled','')
            this.submit_btn.setAttribute('data-status','sign_up')
            this.isToggle=true
        }else {
            e.target.innerHTML='I don\'t have an account'
            this.statusTag.innerHTML='Sign in'
            this.submit_btn.setAttribute('disabled','')
            this.submit_btn.setAttribute('data-status','sign_in')
            this.isToggle=false
        }
    }

    // >>>>>>>>>>>>>>>>>>>>>>> sign in handler funcs <<<<<<<<<<<<<<<<<<<<<<<<<<<
    signInHandler=(result)=>{
        let isExisted=result.some(user=>{
            return user[1].email===this.emailInput.value.trim() && user[1].password===this.passwordInput.value.trim()
        })
       if(isExisted){
           this.alert_message.classList.replace('d-block','d-none')
           let target=result.filter(user=> user[1].email===this.emailInput.value && user[1].password===this.passwordInput.value)
           window.favArray=target[0][1]?.fav ?? []
           window.alertCoin=target[0][1]?.alert ?? []
           window.isLogin=true
           storage.setData(target[0][1]?.alert)
           window.alertCoin.forEach(coin=>createNotification(coin))
           this.addUserFavorite(target[0][1]?.fav)
           this.setCookie(10,target[0][0])
           this.welcomePreparation(this.emailInput.value)
           this.clearInputs()
       }else{
           window.favArray=[]
           window.alertCoin=[]
           window.isLogin=false
            this.alert_message.classList.replace('d-none','d-block')
       }
    }
    favContentShow=()=>{
        if(window.favArray.length > 0){
            this.fav_content.classList.replace('d-none','d-flex')
            this.login_content.classList.replace('d-flex','d-none')
        }else if(window.favArray || window.favArray.length===0){
            this.fav_content.classList.replace('d-flex','d-none')
            this.login_content.classList.replace('d-none','d-flex')
        }
    }
    welcomePreparation=(email)=>{
        this.alert_message.classList.replace('d-block','d-none')
        document.querySelector('#user_section').querySelector('.pre_loader').classList.replace('d-flex','d-none')
        document.querySelector('#user_section main').style.display='none'
        document.querySelector('#user_section .welcome_page').classList.replace('d-none','d-block')
        document.querySelector('#user_section .bi-person-plus-fill').style.display='none'
        document.querySelector('#user_section .user_email').classList.replace('d-none','d-block')
        document.querySelector('#user_section .user_email').innerHTML=email
        document.querySelector('#following').children[0].classList.replace('d-flex','d-none')
        this.favContentShow()
        // document.querySelector('#following').children[1].classList.replace('d-none','d-flex')
    }


// >>>>>>>>>>>>>>>>> helper <<<<<<<<<<<<<<<<<<
    clearInputs(){
        this.emailInput.value=''
        this.passwordInput.value=''
    }
}

export default User