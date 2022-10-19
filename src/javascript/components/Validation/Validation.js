class Validation {
    constructor() {
        this.toggler=document.querySelector('.toggler')
        this.statusTag=document.querySelector('.status')
        this.form=document.querySelector('#form')
        this.submit_btn=document.querySelector('.submit_btn')
        this.emailInput=document.getElementById('email')
        this.passwordInput=document.getElementById('password')
        this.emailRegex=/^([^\W])([A-Za-z0-9]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/
        this.passwordRegex=/^([0-9\#\$\@\*\!]{8,16})$/
        this.isToggle=false
        this.validArray=[
            {email:false},
            {password:false}
        ]
        this.init()
    }
    init(){
        // this.hash('goo').then(res=>console.log(res))
        this.toggler.addEventListener('click',this.statusToggler)
        this.form.addEventListener('submit',this.formHandler)
        this.emailInput.addEventListener('keyup',this.emailHandler)
        this.passwordInput.addEventListener('keyup',this.passwordHandler)
    }
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
        console.log(this.validArray)
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
        console.log(this.validArray)
        this.checkValidation()
    }
    checkValidation(){
        (this.validArray[0].email && this.validArray[1].password) ? this.submit_btn.removeAttribute('disabled') :
            this.submit_btn.setAttribute('disabled','')
    }
    formHandler=e=>{
        e.preventDefault()
        this.clearInputs()
    }
    statusToggler=e=>{
        this.clearInputs()
        if(!this.isToggle){
            e.target.innerHTML='I have an account'
            this.statusTag.innerHTML='Sign up'
            this.submit_btn.setAttribute('disabled','')
            this.isToggle=true
        }else {
            e.target.innerHTML='I don\'t have an account'
            this.statusTag.innerHTML='Sign in'
            this.submit_btn.setAttribute('disabled','')
            this.isToggle=false
        }
    }
    clearInputs(){
        this.emailInput.value=''
        this.passwordInput.value=''
    }

    hash(text){
        let utf=new TextEncoder().encode(text)
        return crypto.subtle.digest('SHA-256',utf).then(hashBuffer=>{
            const hashArray=Array.from(new Uint8Array(hashBuffer));
            return hashArray.map((bytes)=>{
               return  bytes.toString(16).padStart(2,'0')
            }).join('')
        })

    }
}

export default Validation