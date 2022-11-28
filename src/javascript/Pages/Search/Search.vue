<template>
  <section class="w-100 h-100 section_item" id="search_section">
    <Header/>
    <div class="trending_container pe-4 pt-2 ps-2 pb-2">
        <TrendingCard
            v-if="mode"
            v-for="(coin,index) in trendingCoinList" :key="index"
            :abb-name="coin.item.symbol"
            :coin-name="coin.item.id"
            :icon="coin.item.small"
            :current-price="Number(coin.item.price_btc).toFixed(5)"
            :rank="coin.item.market_cap_rank"
        />
    </div>
  </section>
</template>

<script setup>
import '../../../style/components/Search.scss'
import Header from "../../components/Search/Header.vue";
import  TrendingCard from '../../components/Search/TrendingCard.vue'
import {defineProps,ref} from "vue";
////////////////////////////////////////////////////////////////////////
let props=defineProps(['trendingList'])
let mode=ref(false)
let trendingCoinList=ref([])
props.trendingList.then(res=>{
  trendingCoinList.value=res.trendingData
  mode.value=true
})



</script>
