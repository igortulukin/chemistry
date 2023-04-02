<template>
  <div class="searchbar">
    <input type="text" v-model="query" placeholder="CCC(=O)O">
    <button @click="makeSearch">Найти</button>
    <span v-if="resultCount" class="count">Найдено {{resultCount}} результатов</span>
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
  flex-grow: 6;
  border: 1px solid #BEBEBE;
  border-radius: 10px 0 0 10px;
  font-size: 100%;
  padding: 12px 24px;
}
button{
  border: none;
  flex-grow: 1;
  background: #98F576;
  border-radius: 0px 10px 10px 0px;
}
</style>