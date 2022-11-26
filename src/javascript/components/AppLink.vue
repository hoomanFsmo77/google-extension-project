<template>
  <a v-if="isExternal" :href="to"><slot/></a>
  <router-link v-else v-bind="$props"><slot/></router-link>
</template>

<script>
import useAppLink from "../composables/useAppLink.js";
export default {
  name: "AppLink",
  mixins:[useAppLink],
}
</script>

<style scoped>

</style>