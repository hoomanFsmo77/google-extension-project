<template>
  <div v-if="!showIndexPage" class="login_content  w-100  py-3 text-center">
    <img src="../../../../assets/fav.svg" alt="" width="250">
    <h6 class="text-green w-100 text-center mt-2">You are not following any cryptocurrencies yet.</h6>
  </div>
  <div :class="showIndexPage ? 'd-flex' : 'd-none'"  class="fav_content  w-100 position-relative flex-column py-3 ">
    <div v-show="activePreloader" class="pre_loader position-absolute w-100 h-100  start-0  justify-content-center">
      <span class="d-inline-block position-relative inner">
        <span class="position-absolute"></span>
      </span>
    </div>
    <PriceCard v-if="showIndexPage" v-for="(coin,index) in coinInfoContainer"
               :key="index"
               :has-ring="'yes'"
               :icon="coin.image.small"
               :coin-id="coin.id"
               :coin-name="coin.name"
               :abb-name="(coin.symbol).toUpperCase()"  :price="coin.market_data?.current_price.usd"
               :state="`${coin.market_data?.price_change_percentage_24h}`.includes('-') ? 'down' : 'up'"
               :change-state="(coin.market_data?.price_change_percentage_24h).toFixed(2) + '%'"
               :out-trending="isNotTrendingList.includes(coin.id) ? 'yes' : 'no'"
    />
  </div>

</template>

<script setup>
import useFollowing from "../../../composables/useFollowing.js";
import PriceCard from '../../../components/Home/PriceCard.vue'
let props=defineProps(['trendingData'])
const {coinInfoContainer,showIndexPage,activePreloader,isNotTrendingList}=useFollowing(props)

</script>
<style scoped>
.fav_content{
  overflow-y: auto;
  align-items: center;
  height: 303px;
}
.pre_loader{
  z-index: 99;
}
</style>
