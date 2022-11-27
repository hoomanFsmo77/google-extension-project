<template>
  <section id="following" class=" px-3 pt-4 ">
    <div class="d-flex flex-column justify-content-center align-items-center " >
      <img class="" width="250" src="../../../assets/login.svg" alt="">
      <span class="blue">You're not signed in yet.</span>
      <div class="w-100 mt-3 mb-2 d-flex align-items-center justify-content-center">
        <router-link @click="navTracerNavigate" class="btn_h bg-warning border-dark login_redirection" :to="{name:'userPage'}">
          Continue
        </router-link>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Following",
  setup(){
    const navTracerNavigate = () => {
      document.querySelector('.nav_tracer').style.left='78%'
    }

    return {navTracerNavigate}
  }
}
</script>

<style scoped>

</style>