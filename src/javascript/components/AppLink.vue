<template>
  <a :href="to" v-bind="$attrs" target="_blank" v-if="isExternal">
    <slot/>
  </a>

  <router-link
      v-bind="$props"
      v-else
      v-slot="{isActive,navigate,href}"
  >
    <a
        v-bind="$attrs"
        @click="navigate"
        :href="href"
        :class="isActive ? activeClass : inactiveClass"
    >
     <slot/>
    </a>

  </router-link>


</template>

<script>
import useAppLink from "../composables/useAppLink.js";
export default {
  name: "AppLink",
  inheritAttrs:false,
  mixins:[useAppLink],
}
</script>

<style scoped>

</style>