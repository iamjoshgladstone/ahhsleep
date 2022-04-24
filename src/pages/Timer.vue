<template>
  <div class="column flex flex-center bg-grey-10 fit">
    <p class="text-center">Place your phone face down.</p>
    <p class="text-center">Close your eyes.</p>
    <q-circular-progress
      reverse
      :value="timeProgress"
      size="300px"
      :thickness="0.6"
      font-size="50px"
      color="primary"
      center-color="black"
      class="q-ma-md"
      instant-feedback
    />
    <q-btn
      @click="closeTimer"
      class="q-mt-lg"
      push
      color="warning"
      text-color="black"
      label="Cancel Timer"
    />
  </div>
</template>

<script setup>
import words from "../assets/words.json";
import { ref, computed, watch, onMounted } from "vue";

const emit = defineEmits(["closeTimer"]);
// CANCEL TIMER OR TIMER ENDS
const closeTimer = () => {
  emit("closeTimer");
};

// PROPS
const props = defineProps(["wordList", "time"]);
const generatedWordList = JSON.parse(JSON.stringify(props.wordList));
const minutes = JSON.parse(JSON.stringify(props.time));

// CALCULATE COUNTDOWN INTERVAL
let timer;
const timeProgress = ref(100);
const milliSecondTime = minutes * 1000;
const progressDecrement = 100 / (milliSecondTime / 50);

onMounted(() => {
  timer = setInterval(() => {
    timeProgress.value = timeProgress.value - progressDecrement;
  }, 50);
});
</script>

<style>
h2 {
  font-size: 30px;
}

.timer {
  border-radius: 30px;
}

.q-time__header {
  display: none;
}

.q-btn {
  color: white;
}

.text-color {
  color: #3cba9c;
}
.q-slider,
.q-slider__track {
  border-radius: 20px;
  padding: 0px 5px;
}
.q-slider__selection {
  background: #43445c;
}

.q-slider__thumb {
  width: 35px;
  height: 35px;
}

/* .background {
  background-color: black;
} */
</style>
