import {re} from "@babel/core/lib/vendor/import-meta-resolve";

class Api {
    #key;
    #url;
    constructor() {
        this.#url='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY='
        this.#key='c61e0f1a-edac-4164-9185-6d4987107505'
        this.request=null
        this.response=null
        this.start()
    }
     start(){
         this.fetchData().then(result=>{
             console.log(result)
         })

     }
     async fetchData (){
        this.request=await fetch(this.#url + this.#key,{
            headers:{
                "Access-Control-Allow-Headers":"*",
                " Access-Control-Allow-Credentials":true
            }
        })
        if(this.request.ok){
            return await this.request.json()
        }else{
            throw Error(`${this.request.status}`)
        }
    }

}


export default Api