<template>
  <div class="q-ma-lg fixed-center">
    <q-slider
      v-model="minutes"
      :min="0"
      :max="15"
      :step="1"
      dark
      label
      label-always
      color="light-blue"
    />
    <div>
      <h3>{{ timeDisplay }}</h3>
    </div>
    <button
      v-if="!timerIsStarted"
      @click="
        startTimer();
        playAudio();
      "
    >
      Start Timer
    </button>
    <button
      v-if="timerIsStarted"
      @click="
        stopTimer();
        stopAudio();
      "
    >
      Stop Timer
    </button>
  </div>
</template>

<script>
import words from "../assets/words.json";
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const minutes = ref(10);
    const timerIsStarted = ref(false);
    const currentTimeInSeconds = ref(minutes.value * 60);
    const int = ref(1000);
    let timer;
    let audioTimer;
    var index = 0;

    watch(minutes, (newValue) => {
      currentTimeInSeconds.value = newValue * 60;
    });

    watch(currentTimeInSeconds, () => {
      if (currentTimeInSeconds.value == 0) {
        stopTimer();
        stopAudio();
      }
    });

    const audioElement = new Audio();
    const roomNoise = new Audio(
      "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/roomnoise.wav?alt=media&token=fe61c15e-7346-4ac2-bfea-01abc6928db3"
    );

    roomNoise.loop = true;

    const playAudio = () => {
      audioElement.src = words[index].file;
      audioElement.play();
      roomNoise.play();
    };

    audioElement.addEventListener("ended", () => {
      int.value += 500;
      if (index === words.length) {
        index = 0;
      } else {
        index++;
      }
      audioTimer = setTimeout(playAudio, int.value);
    });

    const stopAudio = () => {
      audioElement.pause();
      roomNoise.pause();
      clearTimeout(audioTimer);
    };

    const timeDisplay = computed(() => {
      const minutesCalc = parseInt(currentTimeInSeconds.value / 60);
      const secondsCalc = currentTimeInSeconds.value % 60;
      const paddedMinutes = ("0" + minutesCalc).slice(-2);
      const paddedSeconds = ("0" + secondsCalc).slice(-2);
      return `${paddedMinutes}:${paddedSeconds}`;
    });

    const startTimer = () => {
      timerIsStarted.value = true;
      timer = setInterval(() => {
        currentTimeInSeconds.value--;
      }, 1000);
    };
    const stopTimer = () => {
      timerIsStarted.value = false;
      clearInterval(timer);
    };

    return {
      timeDisplay,
      minutes,
      timerIsStarted,
      startTimer,
      stopTimer,
      playAudio,
      stopAudio,
    };
  },
};
</script>

<style scoped>
body {
  background-color: black;
}
h2 {
  font-size: 30px;
}
</style>
