<template>
  <section id="tabs" class="position-relative">
    <div class=" py-1  d-flex align-items-center pointer position-relative">
      <div @click="changeTab(1,'popularCoin')"  class="w-50 d-flex align-items-center justify-content-center py-1 tab">
        <span class="m-0  d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <span class="fs-09">Popular</span>
        </span>
      </div>
      <div @click="changeTab(2,'followingCoinIndex')" class="w-50 d-flex align-items-center justify-content-center py-1 tab">
        <span class="m-0  d-flex align-items-center text-muted">
            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart-fill mx-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            <span class="fs-09 ">Following</span>
        </span>
      </div>
    </div>
    <span :style="whichTab===1 ? {left:'0'} : {left:'184px'}" class="tab_tracer position-absolute "></span>
  </section>
</template>

<script>
import '../../../style/components/Home.Tab.scss';
import {ref} from "vue";
import {useRouter} from 'vue-router'
export default {
  name: "Tab",
  setup(){
    let whichTab=ref(1)
    const router=useRouter()
    const changeTab = (index,routeName) => {
      whichTab.value=index
      router.push({
        name:routeName
      })
    }

    return {whichTab,changeTab}
  }
}
</script>

<style scoped>

</style>