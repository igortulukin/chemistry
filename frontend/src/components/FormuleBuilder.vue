<template>
  <div class="formuleBuilder">
    <div class="name">
      <h3 @click="$emit('update:showBuilder', !showBuilder)">Конструктор формул</h3>
      <button class="arrow" :class="{open: !showBuilder}" @click="$emit('update:showBuilder', !showBuilder)">
        <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
        <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
          <path xmlns="http://www.w3.org/2000/svg" id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
      </svg>
      </button>
    </div>
    <transition name="fade">
      <div class="wrapper" v-show="showBuilder">
        <div class="builder">
          <div class="top-bar"></div>
          <div class="main"></div>
          <div class="left-bar"></div>
          <div class="right-bar"></div>
        </div>
        <div class="hints">
          <div class="hint" v-if="hint1">
            <button class="close" @click="hint1 = false">✖</button>
            <div>
              <h4>Обучение по работе с конструктором</h4>
              <span>Пройдите 5 легких шагов для лучшего понимания конструктора формул</span>
            </div>
            <a class="forward" href="#">Пройти обучение →</a>
          </div>
          <div class="hint" v-if="hint2">
            <button class="close" @click="hint2 = false">✖</button>
            <div>
              <h4>Изучите алгоритм работы поиска</h4>
              <span>Можете прочитать подробнее про алгоритм поиска и лучше находить то, что вам необходимо</span>
            </div>
            <a class="forward" href="#">Изучить алгоритм поиска →</a>
          </div>
        </div>
      </div>
    </transition>
  </div>


</template>

<script setup>
import {ref} from "vue";
const props = defineProps(['showBuilder'])
defineEmits(['update:showBuilder'])
const hint1 = ref(true)
const hint2 = ref(true)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-leave-to{
  transform: translateY(-15px);
  transition: all 0.5s ease;
}

.fade-enter-from{
  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

h3{
  cursor: pointer;
}

.arrow.open{
  transform: rotate(0deg);
  transition: all .40s ;
}

.builder{
  display: grid;
  grid-template-columns: 70px auto 70px;
  grid-template-rows: 60px auto;
  width: 100%;
  height: 450px;
  margin-bottom: 40px;
}

h4{
  margin-bottom: 10px;
}

.name{
  display: flex;
  gap: 5px;
  align-items: center;
}

.hints{
  display: flex;
  justify-content: center;
  gap: 25px;
}

.hint{
  margin-bottom: 40px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 12px;
  width: 40%;
  height: 120px;
  border: 1px solid #BEBEBE;
  border-radius: 12px;
}

.forward{
  align-self: flex-end;
  color: #0E8A0E;
  font-weight: 500;
}

.close{
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #FFFFFF;
  border: none;
  color: #BEBEBE;
  cursor: pointer;
}

.left-bar{
  background: #FFFFFF;
  grid-row: 2;
  border: 1px solid #DBDBDB;
  border-top: none;
  border-radius: 0px 0px 0px 10px;
}

.arrow{
  cursor: pointer;
  transform: rotate(180deg);
  transition: all .40s ;
  background-color: #FFFFFF;
  border: none;
}

.arrow svg{
  width: 30px;
  height: 12px;
}

.top-bar{
  background: #EFF5F3;
  grid-column: 1 / span 3;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid #DBDBDB;
}

.right-bar{
  grid-row: 2;
  grid-column: 3;
  border: 1px solid #DBDBDB;
  border-top: none;
  border-radius: 0px 0px 10px 0px;
}

.main{
  background-color: lightgray;
}
</style>