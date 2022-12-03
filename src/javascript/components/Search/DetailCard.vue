<template>
  <div class="detail_card rounded-1 d-flex flex-column justify-content-center align-items-center px-3 py-4 pointer">
    <div
        class="d-flex flex-row pb-3 gap-4 justify-content-center w-100 align-items-center border-bottom border-secondary border-1">
      <img :src="img" width="80" alt="">
      <div class="d-flex flex-column gap-1">
        <span class="fs-08 text-dark"><i class="bi bi-coin me-2"></i>Name: <span
            class="name  text-muted"></span> </span>
        <span class="fs-08 text-dark"><i class="bi bi-braces me-2"></i>Symbol: <span class="symbol text-muted">{{symbol}}</span> </span>
        <span class="fs-08 text-dark"><i class="bi bi-tag me-2"></i>Category: <span class=" text-muted category">{{category}}</span> </span>
        <span class="fs-08 text-dark d-flex align-items-center "><i class="bi bi-box2  me-2"></i>Max supply: <span
            class="text-muted supply">{{supply}}</span></span>
        <span class="fs-08 text-dark d-flex align-items-center "><i class="bi bi-basket3  me-2"></i>Max volume: <span
            class="text-muted volume">{{volume}}</span></span>
      </div>

    </div>
    <div class="p-2 w-100">
      <h6 class="text-start">Price details:</h6>
      <div class="row py-2">
        <div class="col-4">
          <span class="fs-08 text-dark d-flex align-items-center"><i class="bi bi-cash-coin me-2"></i> price: <span
              class="text-green current">{{current}}</span></span>
        </div>
        <div class="col-8 d-flex justify-content-end">
          <span class="fs-08 text-dark d-flex align-items-center"><i class="bi bi-bank me-2"></i> Market cap: <span
              class="text-green market">{{market}}</span></span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row">
        <div class="col-6 d-flex justify-content-start">
          <span class="fs-08 text-dark d-flex align-items-center my-2"><i class="bi bi-graph-up text-green me-2"></i>ATH: <span
              class="text-green ath">{{ath}}</span></span>
        </div>
        <div class="col-6 d-flex ">
          <span class="fs-08 text-dark d-flex align-items-center my-2"><i class="bi bi-graph-down me-2 text-red"></i>ATL: <span
              class="text-red atl">{{atl}}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-start">
          <span class="fs-07 text-dark d-flex align-items-center my-2"><i class="bi bi-percent text-green me-2"></i>ATH change: <span
              class="text-green ath-c">{{athC}}</span></span>
        </div>
        <div class="col-12 d-flex justify-content-start">
          <span class="fs-07 text-dark d-flex align-items-center my-2"><i class="bi bi-percent text-red me-2"></i>ATL change: <span
              class="text-red atl-c">{{atlC}}</span></span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row">
        <div class="col-12 d-flex justify-content-start">
          <span class="fs-08 text-dark d-flex align-items-center my-2"><i
              class="bi bi-thermometer-high text-green me-2"></i>24h high: <span class="text-green h-24">{{h24}}</span></span>
        </div>
        <div class="col-12 d-flex justify-content-start">
          <span class="fs-08 text-dark d-flex align-items-center my-2"><i
              class="bi bi-thermometer-low text-red me-2"></i>24h low: <span class="text-red l-24">{{l24}}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-start">
          <span class="fs-07 text-dark d-flex align-items-center my-2 "><i
              class="bi bi-currency-dollar text-green me-1"></i>24h price change: <span class="text-green c-24">{{c24}}</span></span>
        </div>
        <div class="col-12 d-flex justify-content-start">
          <span class="fs-07 text-dark d-flex align-items-center my-2 "><i class="bi bi-percent text-red me-1"></i>24h percent change: <span
              class="text-red p-24">{{p24}}</span></span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row">
        <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center my-2">Blockchain site:
                                        <AppLink class="ms-1 block-link" :to="blockLink">{{blockLink}}</AppLink>
                                    </span>
        </div>
        <div class="col-12 d-flex justify-content-start">
                                    <span class="fs-08 text-dark d-flex align-items-center mt-2">Homepage:
                                        <AppLink class="ms-1 home-link" :to="homeLink">{{homeLink}}</AppLink>
                                    </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <button @click.self="addToFollowing($event,coinId)" :class="isSelected ? 'bg-green' :'bg-dark'"  class="follow_btn border-0  text-light mt-4 mb-2 pointer" >
            <span @click.self="addToFollowing($event,coinId)" v-if="isSelected">
              Following
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2 mx-1" viewBox="0 0 16 16">\n' +
            '  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>\n' +
            '</svg>
            </span>
            <span @click.self="addToFollowing($event,coinId)" v-else>
              Follow
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                 class="bi bi-heart-fill mx-1 " viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
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
import {defineProps} from "vue";
import {detailCard} from "../../composables/useDetail.js";
import AppLink from "../AppLink.vue";
let props=defineProps(['coinId', 'img', 'name', 'symbol', 'category', 'supply', 'volume', 'current', 'market', 'ath', 'atl', 'athC', 'atlC', 'h24', 'l24', 'c24','p24', 'blockLink','homeLink','isChoosen'])

const {isSelected,addToFollowing,redirectToForm,modal}=detailCard(props)

</script>

