import {ref} from "vue";

export default ()=>{
    let tab=ref(1)
    const navigate = index => {
        tab.value=index
    }
    return {navigate,tab}
}