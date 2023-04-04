<template>
  <div class="searchbar">
    <div class="wrapper">
    <input type="text" v-model="query" placeholder="CCC(=O)O" @keyup.enter="makeSearch">
    <svg class="filters" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
    <button @click="makeSearch">Найти</button>
    <span v-if="resultCount != null" class="count">{{ resultCount === 0 ? 'По вашему запросу ничего не найдено' : `Найдено ${resultCount} результатов` }}</span>
  </div>

</template>

<script setup>
import {ref} from "vue";
import router from "../router/index.js";
defineProps(['showBuilder', 'resultCount'])

const emit = defineEmits(['update:show-builder'])
const query = ref('')
function makeSearch(){
  emit('update:show-builder', false)
  router.push(`/search/${query.value}`)
}
</script>

<style scoped>

.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-grow: 6;
}

.filters{
  cursor: pointer;
  position: absolute;
  right: 10px;
}

.count{
  position: absolute;
  top: calc(3vw + 10px)
}

.searchbar{
  position: relative;
  width: 100%;
  display: flex;
  height: 47px;
  margin-bottom: 40px;
  height: 3vw;
}
input{
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  height: 100%;
  border: 1px solid #BEBEBE;
  border-radius: 10px 0 0 10px;
  font-size: 100%;
}
button{
  border: none;
  flex-grow: 1;
  background: var(--main-color);
  border-radius: 0px 10px 10px 0px;
}

button:active, button:hover{
  background-color: var(--main-color-hover);
}
</style>