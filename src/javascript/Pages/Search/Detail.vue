<template>
  <div class="result_show_detail w-100 h-100 ">
    <div class="m-3 pointer backward_btn">
      <svg @click="backward" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
    </div>
    <div class="detail_content w-100 h-100 px-3">

        <DetailCard
          v-if="mode"
          :coin-id="coinData.id"
          :img="coinData.image.small ?? ''"
          :name="coinData.name"
          :symbol="coinData.symbol"
          :category="coinData.categories[0] ?? ''"
          :supply="coinData.market_data?.max_supply ?? ''"
          :volume="coinData.market_data?.total_volume.usd ?? ''"
          :current="coinData.market_data?.current_price.usd +'$' ?? ''"
          :market="coinData.market_data?.market_cap.usd ?? ''"
          :ath="coinData.market_data?.ath.usd +'$' ?? ''"
          :atl="coinData.market_data?.atl.usd +'$' ?? ''"
          :ath-c="coinData.market_data?.ath_change_percentage.usd +'%' ?? ''"
          :atl-c="coinData.market_data?.atl_change_percentage.usd +'%' ?? ''"
          :h24="coinData.market_data?.high_24h.usd +'$' ?? ''"
          :l24="coinData.market_data?.low_24h.usd +'$' ?? ''"
          :c24="coinData.market_data?.price_change_24h +'$' ?? ''"
          :p24="coinData.market_data?.price_change_percentage_24h ?? ''"
          :block-link="coinData.links?.blockchain_site[0] ?? ''"
          :home-link="coinData.links?.homepage[0] ?? ''"
        />

    </div>

  </div>
</template>

<script setup>
import {detail} from "../../composables/useDetail.js";
import DetailCard from '../../components/Search/DetailCard.vue'
import '../../../style/components/Search.Detail.scss'
import {defineProps} from "vue";
/////////////////////////////////////////////////////////////////
let props=defineProps(['id'])
const {backward,mode,coinData}=detail(props)
</script>
