<template>
  <section id="intro" class="overflow-hidden position-relative pointer">
    <div class="bg_overlay w-100 h-100"></div>
    <div class="content position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center px-3 py-2">
      <div>
        <h3 class="m-0 blue text-center">Welcome to MultiCoin!</h3>
        <h6 class="text-light my-2 text-center">
          Personalize you crypto experience with us!
        </h6>
        <div class="w-100 d-flex justify-content-center mt-3">

          <AppLink :to="'https://boisterous-youtiao-de6e7c.netlify.app/'" class="btn_h border-light bg-blue d-flex align-items-center gap-2">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </AppLink>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import '../../../style/components/Home.Introduction.scss';
import AppLink from "../AppLink.vue";
export default {
  name: "Introduction",
  components:{AppLink}
}
</script>

<style scoped>

</style>