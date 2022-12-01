<template>
  <div v-if="!mode" class="login_content  w-100  py-3 text-center">
    <img src="../../../../assets/fav.svg" alt="" width="250">
    <h6 class="text-green w-100 text-center mt-2">You are not following any cryptocurrencies yet.</h6>
  </div>
  <div :class="mode ? 'd-flex' : 'd-none'"  class="fav_content  w-100  flex-column py-3 ">
    <PriceCard v-if="mode" v-for="(coin,index) in coinInfoContainer"
               :key="index"
               :has-ring="'yes'"
               :icon="coin.image.small"
               :coin-id="coin.id"
               :coin-name="coin.name"
               :abb-name="(coin.symbol).toUpperCase()"  :price="coin.market_data?.current_price.usd"
               :state="`${coin.market_data?.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'"
               :change-state="(coin.market_data?.price_change_percentage_24h).toFixed(2) + '%'"
    />
  </div>

</template>

<script setup>
import useFollowing from "../../../composables/useFollowing.js";
import PriceCard from '../../../components/Home/PriceCard.vue'
const {coinInfoContainer,mode}=useFollowing()

</script>
<style scoped>
.fav_content{
  overflow-y: auto;
  align-items: center;
  height: 303px;
}
</style>
