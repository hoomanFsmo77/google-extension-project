<template>
  <section class="w-100 h-100 section_item" id="search_section">
    <Header/>
    <main>
      <h5 class="pt-3 px-3 d-flex align-items-center mb-3 text-muted gap-1">Trending Now <img src="../../../assets/fire.svg" width="20" alt=""></h5>
      <div class="trending_container pe-4 pt-2 ps-2 pb-2">

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
import  TrendingCard from '../../components/Search/TrendingCard.vue'
import {defineProps,ref} from "vue";
////////////////////////////////////////////////////////////////////////
let props=defineProps(['searchData','popularData'])
let mode=ref(false)
let trendingCoinList=ref([])
let bitCoinPrice=ref(1)
Promise.all([props.searchData,props.popularData]).then(result=>{
  trendingCoinList.value=result[0].trendingData
  bitCoinPrice.value=result[1].bitcoinPrice
  mode.value=true
})


</script>
