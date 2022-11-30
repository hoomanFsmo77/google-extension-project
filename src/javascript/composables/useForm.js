import {ref,onMounted,computed} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

let emailRegex=/^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/
let passwordRegex=/^([0-9A-Za-z\#\$\@\*\!]{8,16})$/
let validArray=[
    {email:false},
    {password:false}
]

const extractToken=()=>{
    return document.cookie.slice(document.cookie.indexOf('=')+1)
}

export default (props)=>{
    const email=ref('')
    const password=ref('')
    const isSignIn=ref(true)
    const isToggle=ref(false)
    const email_valid=ref(null)
    const email_invalid=ref(null)
    const password_valid=ref(null)
    const password_invalid=ref(null)
    const form_btn=ref(null)
    const isPreloader=ref(false)
    const router=useRouter()
    const error=ref(false)


    if(extractToken()){
        props.userData.then(response=>{
            if(response.userInfo){
                window.favArray=response.userInfo?.fav ?? []
                window.alertCoin=response.userInfo?.alert ?? []
                router.push({
                    name:'welcome',
                    params:{
                        email:response.userInfo.email
                    }
                })
                changeRoute(response.userInfo.email)
            }
        })
    }

    const changeRoute =email => {
        router.getRoutes().forEach(route=>{
            if(route.name==='userPage'){
                route.redirect={
                    path:`/welcome/${email}`
                }
            }
        })
    }



    const clearInput = () => {
        email.value=''
        password.value=''
    }
    const iconDisappear = () => {
        email_valid.value.classList.replace('d-inline-block','d-none')
        email_invalid.value.classList.replace('d-inline-block','d-none')
        password_valid.value.classList.replace('d-inline-block','d-none')
        password_invalid.value.classList.replace('d-inline-block','d-none')
    }
    const setCookie=(day,id)=>{
        let date=new Date()
        date.setTime(date.getTime() + (day *24*60*60*1000))
        document.cookie=`token=${id};path=/;expires=${date}`
    }



    /////////////////////////// validation
    const emailHandler = () => {
        email_valid.value.classList.replace('d-inline-block','d-none')
        email_invalid.value.classList.replace('d-inline-block','d-none')
        if(emailRegex.test(email.value)){
            email_valid.value.classList.replace('d-none','d-inline-block')
            validArray[0].email=true
        }else{
            email_invalid.value.classList.replace('d-none','d-inline-block')
            validArray[0].email=false
        }
        checkValidation()
    }
    const passwordHandler = () => {
        password_valid.value.classList.replace('d-inline-block','d-none')
        password_invalid.value.classList.replace('d-inline-block','d-none')
        if(passwordRegex.test(password.value)){
            password_valid.value.classList.replace('d-none','d-inline-block')
            validArray[1].password=true
        }else{
            password_invalid.value.classList.replace('d-none','d-inline-block')
            validArray[1].password=false
        }
        checkValidation()
    }
    const checkValidation=()=>{
        (validArray[0].email && validArray[1].password) ?
            form_btn.value.removeAttribute('disabled') :
            form_btn.value.setAttribute('disabled','')
    }




    ////////////////////////// form handler
    const formHandler = () => {
        iconDisappear()
        if(isSignIn.value){
            login()
        }else{
            createAccount()
        }

    }
    const createAccount = () => {
        isPreloader.value=true

        axios.post('https://extension-cdfdf-default-rtdb.firebaseio.com/users.json',{
            email:email.value,
            password:password.value
        }).then(response=>{
            window.isLogin=true
            isPreloader.value=false
            router.push({
                name:'welcome',
                params:{
                    email:email.value
                }
            })
            changeRoute(email.value)
            setCookie(10,response.data.name)
            clearInput()
        }).catch(err=>{
            window.isLogin=false
        })

    }
    const login = () => {
        axios.get('https://extension-cdfdf-default-rtdb.firebaseio.com/users.json').
        then(response=>Object.entries(response.data)).
        then(response=>{
            let isExisted=response.some(user=>{
                return user[1].email===email.value.trim() && user[1].password===password.value.trim()
            })
            if(isExisted){
                error.value=false
                router.push({
                    name:'welcome',
                    params:{
                        email:email.value
                    }
                })
                window.isLogin=true
                changeRoute(email.value)
                let target=response.filter(user=> user[1].email===email.value && user[1].password===password.value)
                setCookie(10,target[0][0])
                clearInput()
            }else {
                error.value=true
                window.isLogin=false
            }
        }).
        catch(err=>{
                error.value=true
                window.isLogin=false
        })
    }
    const toggleStatus = () => {
         clearInput()
         iconDisappear()
         isToggle.value=!isToggle.value
         form_btn.value.setAttribute('disabled','')
         validArray[0].email=false
         validArray[1].password=false
         error.value=false
         isSignIn.value=!isToggle
    }







    return {formHandler,toggleStatus,email,password,email_valid,email_invalid,password_valid,password_invalid,isToggle,form_btn,emailHandler,passwordHandler,isPreloader,error}
}