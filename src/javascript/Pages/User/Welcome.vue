<template>
  <section class="w-100 h-100 section_item position-relative" id="user_section">
    <Header :email="props.email"/>
    <div class="welcome_page  w-100  px-4 py-5">
      <img src="../../../assets/welcome.svg" width="300" alt="">
      <h3 class="text-center blue my-3">You're in!</h3>
      <h6 class="text-center text-dark">We're so glad you're here.</h6>
      <div class="d-flex w-100 justify-content-center align-items-center mt-3">
        <button @click="gotoHome" class="btn_h bg-red text-light border-dark mx-2 home_redirect_btn">Home</button>
        <button @click="logout" class="btn_h bg-red text-light border-dark mx-2 logout_btn">Logout</button>
      </div>
      <div class="d-flex my-3 justify-content-center flex-row gap-2  align-items-center">
        <label for="interval">Set interval for alert:</label>
        <b-form-input id="interval" class="w-50" :type="'number'" value="1" min="1" placeholder="Minutes"></b-form-input>
      </div>
    </div>
  </section>
</template>

<script setup>
import {defineProps} from "vue";
import Header from '../../components/Users/Header.vue';
import useWelcome from "../../composables/useWelcome.js";
let props=defineProps(['email'])
const {gotoHome,logout}=useWelcome()


</script>

