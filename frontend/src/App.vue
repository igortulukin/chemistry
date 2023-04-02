<script setup>
import {ref, computed} from "vue";
import SearchBar from "./components/SearchBar.vue";
import FormuleBuilder from "./components/FormuleBuilder.vue";
const showBuilder = ref(true);
const resultCount = ref('');
</script>

<template>
  <div class="header">
    <div class="logos"><img src="./assets/noc.png" class="noc">✕<img src="./assets/itmo.png" class="itmo"></div>
    <button class="info"></button>
  </div>
  <h1>Химическая база знаний</h1>
  <SearchBar v-model:show-builder="showBuilder" v-model:result-count="resultCount"/>
  <FormuleBuilder v-model:show-builder="showBuilder"/>
  <router-view v-model:result-count="resultCount"></router-view>

</template>

<style scoped>
.header{
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  align-items: center;
}

.logos{
  display: flex;
  align-items: center;
  gap: 13px;
}

.noc{
  margin-top: -6px;
}

.info{
  width: 44px;
  height: 44px;
  background-image: url("./assets/info.png");
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 7px;
  background-color: #FFFFFF;
  border: 1px solid #BEBEBE;
}

.header img{
  filter: grayscale(1); /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1);
}

</style>
