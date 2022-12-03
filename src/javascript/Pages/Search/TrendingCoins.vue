<template>
  <section class="w-100 h-100 section_item" id="search_section">
    <Header/>
    <main>
      <h5 class="pt-3 px-3 d-flex align-items-center mb-3 text-muted gap-1">Trending Now <img src="../../../assets/fire.svg" width="20" alt=""></h5>
      <div class="trending_container pe-4 pt-2 ps-2 pb-2 position-relative">

        <div v-show="!mode" class="pre_loader position-absolute w-100 h-100  start-0  justify-content-center">
              <span class="d-inline-block position-relative inner">
                     <span class="position-absolute"></span>
              </span>
        </div>

        <TrendingCard
            v-if="mode"
            v-for="(coin,index) in trendingCoinList" :key="index"
            :abb-name="coin.item.symbol"
            :coin-name="coin.item.id"
            :icon="coin.item.small"
            :current-price="Number((coin.item.price_btc)*bitCoinPrice).toFixed(3)"
            :rank="coin.item.market_cap_rank"
        />
      </div>
    </main>
  </section>
</template>

<script setup>
import '../../../style/components/Search.scss'
import Header from "../../components/Search/Header.vue";
import  TrendingCard from '../../components/Search/TrendingCard.vue';
import {trendingCoins} from "../../composables/useTrendingCoins.js";
import {defineProps} from "vue";
////////////////////////////////////////////////////////////////////////
let props=defineProps(['searchData','popularData'])
const {bitCoinPrice,trendingCoinList,mode}=trendingCoins(props)


</script>
<style scoped lang="scss">
.pre_loader{
  background: rgb(238, 237, 236)!important;
  .inner span{
    background: rgb(238, 237, 236)!important;
  }
}
</style>