import {ref} from "vue";

export default (props)=>{
    let coinsList=ref([])
    let mode=ref(true)
    props.popularData.then(list=>{
        mode.value=false
        coinsList.value=list.homeData
    })

    return {mode,coinsList}
}