<template>
 <router-view></router-view>
</template>

<script setup>
import {useRouter} from "vue-router";
let router=useRouter()
if(window.isLogin){
  router.push({
    name:'isLogin'
  })
}else{
  router.push({
    name:'isNotLogin'
  })
}
</script>
