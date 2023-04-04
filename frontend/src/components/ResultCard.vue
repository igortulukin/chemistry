<template>
  <div class="card">
    <div class="info">
      <h3><a href="/#">{{card.title}}</a></h3>
      <p>{{card.description}}</p>
      <div class="additional">
        <span v-for="info in card.additional">{{info}}</span>
      </div>
      <p class="wrong-result" @click="reportShow = true">Результат поиска неправильный</p>
    </div>
    <div class="pic">
      <img :src="card.image">
    </div>
    <div class="report" v-if="reportShow">
      <div class="report-window">
        <button class="close" @click="reportShow = false">✕</button>
        <h4>Почему результат поиска неправильный?</h4>
        <span>Благодаря вашему отзыву, мы сможем сделать поисковик лучше</span>
        <form>
          <input type="radio" id="formula" name="incorrect_search" value="Wrong_formula" v-model="reportValue">
          <label for="formula">Неверная формула</label>
          <input type="radio" id="algorithm" name="incorrect_search" value="Error_in_algorithm" v-model="reportValue">
          <label for="algorithm">Ошибка в алгоритме поиска</label>
          <input type="radio" id="display" name="incorrect_search" value="Wrong_display" v-model="reportValue">
          <label for="display">Неправильное отображение формулы</label>
          <input type="radio" id="own" name="incorrect_search" value="Own_option" v-model="reportValue">
          <label for="own">Свой вариант</label>
          <button class="send" :disabled="!reportValue">Отправить</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";
const props = defineProps({card: Object})
const reportShow = ref(false)
const reportValue = ref('')
</script>

<style scoped>

a:visited{
  color: #06899B;
}

a:hover{
  text-decoration: underline;
  text-decoration-color: inherit;
  text-underline-offset: 5px;
}

.report{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.45);
}

.report-window{
  position: relative;
  background-color: #FFFFFF;
  display: flex;
  flex-flow: column;
  gap: 14px;
  padding: 32px;
  border-radius: 10px;
}

.close{
  position: absolute;
  background-color: #FFFFFF;
  border: none;
  top: 10px;
  right: 10px;
}

form{
  margin-top: 14px;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 16px;
}

label{
  cursor: pointer;
}

.send{
  grid-column: 2;
  justify-self: end;
  border: none;
  width: 129px;
  height: 43px;
  border-radius: 10px;
  background: var(--main-color);
}

.send:disabled{
  cursor: inherit;
  background-color: var(--light-gray);
}

input[type="radio"] {
  appearance: none;
  cursor: pointer;
  background-color: #ffffff;
  margin: 0;
  font: inherit;
  color: var(--main-with-wight);
  width: 1.15em;
  height: 1.15em;
  border: 1px solid var(--main-with-wight);
  border-radius: 100%;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
}

input[type="radio"]::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 100%;
  transform: scale(0);
  color: var(--main-with-wight);
  transition: 120ms transform ease-in-out;
}

input[type="radio"]:checked::before {
  box-shadow: inset 1em 1em var(--main-with-wight);
  transform: scale(1);
}

h3{
  margin: 0;
  color: var(--main-with-wight);
}

h4{
  font-size: 24px;
}

p{
  margin: 0;
}

.additional{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

span{
  flex: 1 0 40%;
}

.card{
  display: flex;
  gap: 25px;
  border-bottom: 1px solid #EDE6E6;
}
.info{
  display: flex;
  flex-flow: column;
  gap: 16px;
  width: 66%;
  flex-grow: 2;
}
.pic{
  flex-grow: 1;
}

.wrong-result{
  cursor: pointer;
  margin: 16px 0;
  color: #BEBEBE;
}

img{
  max-width: 100%;
  object-fit: contain;
}
</style>