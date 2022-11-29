<template>
  <header :class="active && 'active'" class="w-100 px-3 py-2 d-flex justify-content-between align-items-center flex-row-reverse position-relative ">
    <CloseButton/>
    <div class="d-flex gap-2 align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      <input @keyup="searchInputHandler($event)" id="search_input" type="text" placeholder="search coin...">
    </div>
    <div class="result_box position-absolute overflow-auto">
      <ul class="m-0 px-3 py-2  flex-column gap-2 list-unstyled " ref="searchBox">
        <li @click.self="selectedCoinHandler($event)" v-for="(coin,index) in searchResult"
            :key="index"
            v-if="active"
            :data-id="coin.id"
            class="px-4 d-flex align-items-center gap-2 pointer blue-hover">
          <img :src="coin.image" width="20" alt="">
          {{coin.id}}
        </li>
      </ul>
    </div>
  </header>
</template>


<script setup>
import CloseButton from "../CloseButton.vue";
import useSearch from "../../composables/useSearch.js";
const {searchInputHandler,active,searchResult,searchBox,selectedCoinHandler}=useSearch()
</script>
