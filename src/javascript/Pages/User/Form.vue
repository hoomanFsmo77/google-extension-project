<template>
  <section class="w-100 h-100 section_item position-relative" id="user_section">
    <Header/>
    <main class="px-4 py-5 ">
      <div class="d-flex align-items-center justify-content-between">
              <h5 class="m-0 status">{{isToggle ? 'Sign up' : 'Sign in'}} </h5>
              <span class="text-decoration-underline blue pointer toggler" @click="toggleStatus">
                   {{isToggle ? 'I have an account' : "I don't have an account"}}
                </span>
      </div>
      <form id="form" @submit.prevent="formHandler">
        <div class="d-flex flex-column align-items-center justify-content-center mt-5 gap-2">
          <div class="w-100  position-relative">
            <label for="email"></label>
            <input @keyup="emailHandler" v-model="email" type="email" id="email" class="border-red pe-4 py-2 w-100" placeholder="Email">
            <svg ref="email_valid" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle-fill position-absolute end-0  d-none text-green" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <svg ref="email_invalid" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-x-circle-fill position-absolute end-0  text-red d-none" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
          </div>
          <div class="w-100 position-relative ">
            <label for="password"></label>
            <input @keyup="passwordHandler" v-model="password" type="password" id="password" class="border-green pe-4 py-2 w-100" placeholder="Password">
            <svg ref="password_valid" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check-circle-fill position-absolute end-0 d-none text-green" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <svg ref="password_invalid" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-x-circle-fill position-absolute end-0  text-red d-none" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
          </div>
          <div class="w-100 d-flex  justify-content-center mt-4">
            <button ref="form_btn" class="btn_h bg-warning border-dark w-50 submit_btn" disabled>Continue</button>
          </div>
          <div v-if="error" class="alert_message text-center">
            <span class="text-red">Sorry, but your email doesn't exist! </span>
          </div>
        </div>
      </form>
    </main>
    <div :class="isPreloader ? 'd-flex' :'d-none'" class="pre_loader position-absolute w-100 h-100 top-0 start-0  justify-content-center ">
      <span class="d-inline-block position-relative inner"><span class="position-absolute"></span></span>
    </div>
  </section>
</template>

<script setup>
import Header from '../../components/Users/Header.vue'
import useForm from "../../composables/useForm.js";
import '../../../style/components/Users.scss'
import {defineProps} from "vue";
let props=defineProps(['userData'])

const {formHandler,toggleStatus,password,email,email_invalid,email_valid, password_invalid,password_valid,isToggle,form_btn,emailHandler,passwordHandler,isPreloader,error}=useForm(props)


</script>

