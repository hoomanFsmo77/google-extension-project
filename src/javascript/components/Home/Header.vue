<template>
  <header class="w-100 px-3 py-2  d-flex justify-content-between align-items-center flex-row-reverse shadow-lg">
    <CloseButton/>
    <div class="d-flex align-items-center">
      <img src="../../../assets/logo_32.png" alt="">
    </div>
  </header>
</template>

<script>
import CloseButton from "../CloseButton.vue";

export default {
  name: "Header",
  components: {CloseButton}

}
</script>

<style scoped>

</style>