<template>
<div class="search-result">
  <ResultCard v-if="query" v-for="card in data" :card="card"/>
  <div v-else class="nothing-found">
    <h3>По вашему запросу ничего не найдено</h3>
    <ul>
    Попробуйте снова, учитывая эти правила:
      <li>проверьте ещё раз данные, которые вы ввели</li>
      <li>при заполненни формы используйте формат SMILES</li>
      <li>используйте больше ключевых слов (Пластик, Вода)</li>
    </ul>
    Рекомендуем подробнее ознакомиться с алгоритмом поиска, чтобы точнее задававать наиболее точный запрос
    <div class="buttons">
      <button class="read-more">Читать подробнее про алгоритм поиска</button>
      <button class="report">Сообщить об ошибке</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import searchResult from "./searchResult.json"
import ResultCard from "./ResultCard.vue";
import {ref, watch} from "vue";
const route = useRoute();
const props = defineProps({
  query: String,
  resultCount: String
})
const emit = defineEmits(['update:result-count'])
const data = ref(searchResult);
emit('update:result-count', data ? data.length : 0);
watch(() => route.params, () => {
  if (route.params.query){
    data.value = null;
    console.log('emit')
    emit('update:result-count', null)
  }
/*  data.value = searchResult;
  emit('update:result-count', data ? data.length : 0)*/
})
</script>

<style scoped>
.search-result{
  display: flex;
  gap: 25px;
  flex-flow: column;
}

h3{
  margin: 0;
}

li {
  list-style-type: none;
  position: relative;
  margin-left: 25px;
}

li::before {
  content: '•';
  position: absolute;
  left: -0.8em;
  font-size: 1.1em;
}

.buttons{
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  font-size: 16px;
}

.nothing-found{
  color: #444444;
  display: flex;
  flex-flow: column;
  gap: 16px;
}

.read-more{
  width: 350px;
  height: 43px;
  background: #98F576;
  border-radius: 10px;
  border: none;

}

.report{
  background-color: #FFFFFF;
  width: 208px;
  height: 43px;
  border: 1px solid #BEBEBE;
  border-radius: 10px;
}

</style>