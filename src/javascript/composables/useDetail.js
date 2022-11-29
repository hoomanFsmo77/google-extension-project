import {useRouter} from "vue-router";
import {ref,onMounted} from "vue";
import axios from "axios";

export default (props)=>{
    const router=useRouter()
    let mode=ref(false)
    let coinData=ref({})

    const backward = () => {
      router.push({
          name:'search'
      })
    }

    onMounted(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}`).then(response=>{
            coinData.value=response.data
            mode.value=true
        })
    })



    return {backward,mode,coinData}
}