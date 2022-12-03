<template>
  <div
      v-if="show"
      class="crypto_card mb-3  p-3  ms-2 py-3 rounded-1 pointer d-flex justify-content-between align-items-center position-relative" :style="hasRing && {width:'300px'}">
    <div class="d-flex align-items-center gap-2">
      <img :src="icon" width="30" alt="">
      <div>
        <p :class="outTrending==='yes' ? 'd-block' : 'd-none'" class="out_trending_message  text-center fs-07 m-0 lh-sm text-muted">This coin is out of trending coins
          now.</p>
        <span class="coin_name d-block ">
          <span class="fw-bold fs-09">{{coinName}}</span>
          <span class="text-green  mx-1">{{abbName}}</span>
        </span>
        <span class="text-muted  price  d-inline">{{price}}$</span>
        <span class="d-inline text-muted fs-09">|</span>
        <span class="d-inline ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                              :style="state==='down' ? {display:'inline-block'} : {display:'none'}"  class="bi bi-arrow-down text-red " viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                             :style="state==='up' ? {display:'inline-block'} : {display:'none'}"   class="bi bi-arrow-up text-green  " viewBox="0 0 16 16">
  <path fill-rule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>


                    <span :class="state==='up' ? 'text-green' : 'text-red'" class="change_percent">{{changeState}}</span>
                </span>
      </div>
    </div>
    <div class="add_to_favorite position-relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         :class="{'d-none':hasRing==='yes','text-green':isSelected,'text-muted':!isSelected.value}"  class="bi bi-heart-fill  position-absolute " viewBox="0 0 16 16">
        <path @click="addToFavoriteHandler($event,coinId)" class="path_1" fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          :class="{'d-block':hasRing==='yes','d-none':hasRing==='no','text-red':activeAlert,'text-muted':!activeAlert}" class="bi bi-bell-fill  position-absolute  "
           viewBox="0 0 16 16">
        <path @click="addToAlertListHandler($event,coinId)" class="path_2"
              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
      </svg>
    </div>
    <i @click="removeOutOfTrendingCoinHandler" :class="outTrending==='yes' ? 'd-block' : 'd-none'" class="bi bi-x position-absolute remove_btn  m-1 text-light d-flex p-1 rounded-circle bg-red"></i>

    <b-modal size="sm" :hide-footer="true" v-model="modal" id="modal-1" title="Message from MultiCoin">
      <h5 class="text-center ">Please sign in/sign up to continue</h5>
      <div class="w-100 d-flex justify-content-center">
        <button class="btn_h bg-warning border-dark my-1 " @click="redirectToForm">Continue</button>
      </div>
    </b-modal>
    <b-modal size="sm" :hide-footer="true" v-model="alertModal" id="modal-2" title="Message from MultiCoin">
      <h6 class="text-center " v-html="modalMessage"></h6>
      <div class="w-100 d-flex justify-content-center">
        <button class="btn_h bg-warning border-dark my-1 " @click="closeModal">Ok</button>
      </div>
    </b-modal>
  </div>

</template>

<script setup>
import '../../../style/components/Home.PriceCard.scss';
import usePriceCard from "../../composables/usePriceCard.js";

let props=defineProps(['icon','coinName', 'abbName', 'price', 'state', 'hasRing', 'changeState', 'coinId','outTrending'])
const {addToFavoriteHandler,isSelected,modal,redirectToForm,removeOutOfTrendingCoinHandler,show,addToAlertListHandler,activeAlert,alertModal,closeModal,modalMessage}=usePriceCard(props)


</script>
