import {ref} from "vue";


export default (props)=>{
    let coinsList=ref([])
    let mode=ref(true)

    props.popularData.then(response=>{
        coinsList.value=response.homeData
        mode.value=false
    })


    return {mode,coinsList}
}