import {ref,onMounted} from "vue";

export default ()=>{
    let mode=ref(true)
    const loader = () => {
      setTimeout(()=>{
          mode.value=false
      },2000)
    }
    onMounted(()=>{
        loader()
    })

    return {mode}
}