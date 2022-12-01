<template>
  <nav class="position-relative">
    <div class="row pointer px-2 py-3">
      <div  class="d-flex justify-content-center align-items-center col-4 nav_item">
        <AppLink inactive-class="inactive" active-class="active" class="link-reset"  :to="{name:'homePage'}">
          <svg @click="navigate(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
          </svg>
        </AppLink>
      </div>
      <div   class="col-4 d-flex justify-content-center nav_item">
        <AppLink inactive-class="inactive" active-class="active" class="link-reset"  :to="{name:'searchPage'}">
          <svg @click="navigate(2)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </AppLink>

      </div>
      <div  class="col-4 d-flex justify-content-center nav_item">
        <AppLink inactive-class="inactive" active-class="active" class="link-reset"  :to="{name:'userPage'}">
          <svg @click="navigate(3)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </AppLink>
      </div>
    </div>
    <span :style="tab===1 ? {left:'10%'} : tab===2 ? {left: '45%'} :tab===3 ? {left: '78%'} : ''" class="position-absolute nav_tracer"></span>
  </nav>
</template>

<script>
import '../../style/components/Navigation.scss';
import useNavigation from "../composables/useNavigation.js";
import AppLink from "./AppLink.vue";


export default {
  name: "Navigation",
  components: {AppLink},
  setup(){
    const {tab,navigate}=useNavigation()
    return {navigate,tab}
  }
}
</script>

