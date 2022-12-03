<template>
  <div class="trending_card w-100 m-2 py-3 px-2 d-flex flex-column gap-2 align-items-center rounded-2 my-0">
    <div class="p-2 border border-secondary rounded-circle">
      <img :src="icon" width="40" class="img-fluid" alt="">
    </div>
    <div class="d-flex flex-column  justify-content-center align-items-center">
      <span class="fs-6 fw-bold coin_name text-center">{{coinName}}</span>
      <span class="symbol text-green">{{abbName}}</span>
      <span class="text-muted  d-flex align-items-center price">
                            <span class="d-inline ">{{currentPrice}}$</span>
                            <span class="d-inline mx-1 fs-09">|</span>
                            <span class=" mx-1 rank">Rank:{{rank}}</span>
                        </span>
      <button @click.self="addToFollowing($event,coinName)"
              :class="isSelected ? 'bg-green' : 'bg-dark'"
              class="follow_btn border-0  text-light mt-4 mb-2 pointer">
        <span @click.self="addToFollowing($event,coinName)" v-if="!isSelected">
           Follow
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
             class="bi bi-heart-fill mx-1 " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        </span>
        <span @click.self="addToFollowing($event,coinName)" v-else>
          Following
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2 mx-1" viewBox="0 0 16 16">\n' +
            '  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>\n' +
            '</svg>
        </span>

      </button>
    </div>
    <b-modal size="sm" :hide-footer="true" v-model="modal" id="modal-1" title="Message from MultiCoin">
      <h5 class="text-center ">Please sign in/sign up to continue</h5>
      <div class="w-100 d-flex justify-content-center">
        <button class="btn_h  bg-warning border-dark my-1 " @click="redirectToForm">Continue</button>
      </div>
    </b-modal>

  </div>


</template>

<script setup>
import '../../../style/components/Search.TrendingCard.scss';
import {trendingCoinCard} from "../../composables/useTrendingCoins.js";
/////////////////////////////////////////////////////////////////////////
import {defineProps} from "vue";
let props=defineProps(['icon','coinName','abbName','currentPrice','rank'])
const {addToFollowing,isSelected,modal,redirectToForm}=trendingCoinCard(props)


</script>
