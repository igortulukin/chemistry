<template>
<div class="search-result">
  <ResultCard v-if="query" v-for="card in searchResult" :card="card"/>
  <div v-else class="nothing-found">
    <h3>По вашему запросу {{props.query}} ничего не найдено</h3>
    <ul>
    Попробуйте снова, учитывая эти правила:
      <li>проверьте ещё раз данные, которые вы ввели</li>
      <li>при заполненни формы используйте формат <a>SMILES</a> </li>
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
import searchResult from "./searchResult.json"
import ResultCard from "./ResultCard.vue";
import {ref, watch} from "vue";

const emit = defineEmits(['update:result-count', 'update:show-builder'])
const props = defineProps({
  query: String,
  resultCount: String,
  showBuilder: Boolean,
})

emit('update:result-count', searchResult.length)
emit('update:show-builder', false)

watch(props, async ()=> {
  if (!props.query){
    emit('update:result-count', null)
  }
  else {
    emit('update:result-count', searchResult.length)
  }
})
</script>

<style scoped>
.search-result{
  display: flex;
  gap: 25px;
  flex-flow: column;
}

a{
  color: var(--main-with-wight);
  text-decoration: underline;
  text-underline-offset: 1px;
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
  background: var(--main-color);
  border-radius: 10px;
  border: none;
}

.read-more:active, .read-more:hover{
  background-color: var(--main-color-hover);
}

.report{
  background-color: #FFFFFF;
  width: 208px;
  height: 43px;
  border: 1px solid #BEBEBE;
  border-radius: 10px;
}

</style>