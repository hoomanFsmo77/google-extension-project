<template>
  <Header/>
  <Introduction/>
  <Tab/>
  <router-view ></router-view>
</template>

<script>
import Header from "../../components/Home/Header.vue";
import Introduction from "../../components/Home/Introduction.vue";
import Tab from "../../components/Home/Tab.vue";
export default {
  name: "Home",
  components:{Header,Introduction,Tab},
}
</script>

<style scoped>

</style>