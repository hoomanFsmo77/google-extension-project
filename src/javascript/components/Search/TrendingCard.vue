<template>
  <div class="trending_card w-100 m-2 py-3 px-2 d-flex flex-column gap-2 align-items-center rounded-2 my-0">
    <div class="p-2 border border-secondary rounded-circle">
      <img :src="icon" width="40" class="img-fluid" alt="">
    </div>
    <div class="d-flex flex-column  justify-content-center align-items-center">
      <span class="fs-6 fw-bold coin_name text-center">{{coinName}}</span>
      <span class="symbol text-green">{{abbName}}</span>
      <span class="text-muted  d-flex align-items-center price">
                            <span class="d-inline ">{{currentPrice}}</span>
                            <span class="d-inline mx-1 fs-09">|</span>
                            <span class=" mx-1 rank">Rank:{{rank}}</span>
                        </span>
      <button :data-id="coinName" class="follow_btn border-0 bg-dark text-light mt-4 mb-2 pointer">
        Follow
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
             class="bi bi-heart-fill mx-1 " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </button>
    </div>
  </div>


</template>

<script setup>
import '../../../style/components/Search.TrendingCard.scss'
import {defineProps} from "vue";
let props=defineProps(['icon','coinName','abbName','currentPrice','rank'])



</script>
