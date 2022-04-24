<template>
  <q-page class="flex column items-center">
    <div class="constrain flex column items-center">
      <div class="topic">
        <p class="text-center">Selet your sleepy words topic</p>
        <div class="q-gutter-md flex justify-center">
          <q-btn
            color="secondary"
            label="All"
            :outline="currentSelection != 'all'"
            @click="setTag('all')"
          />
          <q-btn
            color="secondary"
            label="Nature"
            :outline="currentSelection != 'nature'"
            @click="setTag('nature')"
          />
          <q-btn
            color="secondary"
            label="Animals"
            :outline="currentSelection != 'animals'"
            @click="setTag('animals')"
          />
          <q-btn
            color="secondary"
            label="Everyday"
            :outline="currentSelection != 'everyday'"
            @click="setTag('everyday')"
          />
          <q-btn
            color="secondary"
            label="Scenery"
            :outline="currentSelection != 'scenery'"
            @click="setTag('scenery')"
          />
        </div>
        <div class="time-select q-pa-lg q-mt-lg flex column justify-center items-center">
          <p class="text-center">Drag to set timer</p>
          <q-slider
            v-model="minutes"
            :min="0"
            :max="15"
            :step="1"
            dark
            rounded
            style="background: #6f7793"
            track-size="25px"
            thumb-size="25px"
            fit
          />
          <h3 class="text-color text-center">{{ timeDisplay }}</h3>
        </div>
      </div>
      <q-btn
        size="22px"
        style="background: #6f7793"
        class="q-px-xl q-py-xs"
        label="Start Timer"
        rounded
        ripple
        :disabled="!currentSelection"
        @click="showTimer = true"
      />
    </div>
    <q-dialog
      v-model="showTimer"
      persistent
      maximized
      seamless
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <Timer
        :wordList="wordList"
        :time="currentTimeInSeconds"
        @closeTimer="showTimer = !showTimer"
      ></Timer>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed, watch } from "vue";
// import Timer from "../pages/Timer.vue";
import { useWords } from "../pinia/words.js";
import Timer from "../pages/Timer.vue";

const store = useWords();

const wordList = ref([]);

const tag = ref(null);
const targetWords = ref([]);
const showTimer = ref(false);

// SETTING THE TAG FOR THE PINIA STORE
const currentSelection = ref("");
const setTag = (input) => {
  wordList.value = store.wordPlaylist(input);
  currentSelection.value = input;
};

// Time Select Refs
const minutes = ref(5);
const currentTimeInSeconds = ref(minutes.value * 60);

// Time Watchers
watch(minutes, (newValue) => {
  currentTimeInSeconds.value = newValue * 60;
});
// Calculate time display with 00:00 format

const timeDisplay = computed(() => {
  const minutesCalc = parseInt(currentTimeInSeconds.value / 60);
  const secondsCalc = currentTimeInSeconds.value % 60;
  const paddedMinutes = ("0" + minutesCalc).slice(-2);
  const paddedSeconds = ("0" + secondsCalc).slice(-2);
  return `${paddedMinutes}:${paddedSeconds}`;
});
</script>

<style>
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
</style>
