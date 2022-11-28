<template>
  <section id="popular" class="position-relative px-3 pt-4 d-flex flex-column gap-2">
    <div v-if="mode" class="pre_loader position-absolute w-100 h-100 top-0 start-0  justify-content-center">
      <span class="d-inline-block position-relative inner">
        <span class="position-absolute"></span>
      </span>
    </div>
    <PriceCard v-else
        v-for="(coin,index) in props.coinsList"
        :key="index"
        :has-ring="'no'"
        :icon="coin.image"
        :coin-id="coin.id"
        :coin-name="coin.name"
        :abb-name="(coin.symbol).toUpperCase()"  :price="coin.current_price"
        :state="`${coin.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'"
        :change-state="(coin.price_change_percentage_24h).toFixed(2) + '%'"
    />
  </section>
</template>

<script setup>
import {defineProps} from "vue";
let props=defineProps(['coinsList','error'])
import '../../../style/components/Home.Popular.scss';
import usePopular from "../../composables/usePopular.js";
import PriceCard from "../../components/Home/PriceCard.vue";
const {mode}=usePopular()
</script>