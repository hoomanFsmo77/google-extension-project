import {ref} from "vue";

export default ()=>{
    let tab=ref(1)
    const navigate = (index,routerName) => {
        tab.value=index
    }
    return {navigate,tab}
}