import Api from "../Api/Api.js";
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


        // >>>>>>>> sections <<<<<<<<<
        this.following_section=document.querySelector('#following')
        this.user_section=document.querySelector('#user_section')
        this.section_container= document.querySelector('.section_container')


        // >>>>>>> regex <<<<<<<<
        this.emailRegex=/^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/
        this.passwordRegex=/^([0-9A-Za-z\#\$\@\*\!]{8,16})$/

        // >>>>>>> helper <<<<<<<
        this.isToggle=false
        this.validArray=[
            {email:false},
            {password:false}
        ]

        // >>>>>>>>>>>> intializing all events <<<<<<<<<<<<
        this.init()
    }
    init(){
        this.toggler.addEventListener('click',this.statusToggler)
        this.form.addEventListener('submit',this.formHandler)
        this.emailInput.addEventListener('keyup',this.emailHandler)
        this.passwordInput.addEventListener('keyup',this.passwordHandler)
        this.home_redirect_btn.addEventListener('click',this.homeRedirection)
        this.logout_btn.addEventListener('click',this.logoutHandler)
        this.checkRegistration()
    }
// >>>>>>>>>>>>>>>>>> to do on page load func <<<<<<<<<<<<<<<<<<<<
    checkRegistration=()=>{
        if(document.cookie.includes('token')){
            window.isLogin=true
            api.getSpecificUser(this.extractToken).
            then(response=>{
                this.addUserFavorite(response.fav)
                window.favArray=response?.fav ?? []
                this.welcomePreparation(response.email)
            }).
            catch(err=>{
                console.log(err)
            })
        }else{
            window.favArray=[]
            window.isLogin=false
        }
    }
    addUserFavorite(data){
        let convertedData=[...new Set(data)]
        this.setUserFavoriteCoin(convertedData)
        api.startMainSection(convertedData,'yes',this.fav_content)
    }
    setUserFavoriteCoin(data){
        data.forEach(coin=>{
            document.querySelectorAll('price-card').forEach(card=>{
                if(card.getAttribute('coin-id')===coin){
                    card.shadowRoot.querySelector('.bi-heart-fill').classList.replace('text-muted','text-green')
                }
            })

        })

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
    }


// >>>>>>>>>>>>>>>>> logout funcs <<<<<<<<<<<<<<<<<<<
    logoutHandler=()=>{
        this.deleteCookie(10)
        this.clearInputs()
        this.iconDisappear()
        window.favArray=[]
        window.isLogin=false
       this.actionOnLogout()
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
                console.log(err)
                window.isLogin=false
            })
        }
        if(this.submit_btn.getAttribute('data-status')==='sign_in'){
           api.getAllUsers().
           then(response=>Object.entries(response)).
           then(result=>this.signInHandler(result)).
           catch(err=>{
               this.alert_message.classList.replace('d-none','d-block')
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
           window.favArray=target[0][1]?.fav ?? ''
           window.isLogin=true
           this.addUserFavorite(target[0][1]?.fav)
           this.setCookie(10,target[0][0])
           this.welcomePreparation(this.emailInput.value)
           this.clearInputs()
       }else{
           window.favArray=[]
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