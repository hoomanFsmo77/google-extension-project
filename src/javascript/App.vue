<template>
  <router-view ></router-view>
  <Navigation/>
</template>

<script>
/////////// style
import '../style/App.scss';
//////////// components
import Navigation from "./components/Navigation.vue";
///////////assets
import '../../manifest.json';
import '../assets/logo_16.png'
import '../assets/logo_32.png'
import '../assets/logo_48.png'
import '../assets/logo_128.png'


export default {
  name: "App",
  components: {Navigation},

}
</script>
