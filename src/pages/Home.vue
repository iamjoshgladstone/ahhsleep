<template>
  <div class="column justify-center items-center q-pa-lg q-mt-xl">
    <div>
      <h3 class="text-color">{{ timeDisplay }}</h3>
    </div>
    <p>Drag to set timer</p>
    <q-slider
      v-model="minutes"
      :min="0"
      :max="15"
      :step="1"
      dark
      rounded
      style="background: #6f7793"
      track-size="35px"
      thumb-size="35px"
    />

    <div>
      <q-btn
        size="22px"
        style="background: #6f7793"
        class="q-px-xl q-py-xs q-mt-xl"
        label="Start Timer"
        rounded
        ripple
        v-if="!timerIsStarted"
        @click="
          startTimer();
          playAudio();
          startFade();
        "
      />
      <q-btn
        size="22px"
        class="q-px-xl q-py-xs q-mt-xl"
        style="background: #6f7793"
        label="Stop Timer"
        rounded
        push
        v-if="timerIsStarted"
        @click="
          stopTimer();
          stopAudio();
        "
      />
    </div>
  </div>
</template>

<script>
import words from "../assets/words.json";
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const minutes = ref(5);
    const timerIsStarted = ref(false);
    const currentTimeInSeconds = ref(minutes.value * 60);
    const int = ref(2000);
    let timer;
    let audioTimer;
    let fadeOut;
    var vol = 1;
    var index = Math.floor(Math.random() * words.length);
    var songArrayToExclude = [];

    // Add all the available words to the array
    for (var i = 0; i <= words.length - 1; i++) {
      songArrayToExclude.push(i);
    }

    // Watch to get the Current Time In Seconds matching minutes
    watch(minutes, (newValue) => {
      currentTimeInSeconds.value = newValue * 60;
    });

    // Watch for end timer
    watch(currentTimeInSeconds, () => {
      if (currentTimeInSeconds.value == 0) {
        stopTimer();
        stopAudio();
        stopFade();
      }
    });

    // Define new audio elements
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

    const startFade = () => {
      const fadeInt = (minutes.value * 60) / 100 / 1000;
      const fadeSeconds = ((minutes.value * 60) / 100) * 1000;
      fadeOut = setInterval(() => {
        if (vol > 0) {
          vol = vol - fadeInt;
          audioElement.volume = vol;
        }
      }, fadeSeconds);
    };

    const stopFade = () => {
      clearInterval(fadeOut);
    };

    // Fix this to generate new random numbers
    audioElement.addEventListener("ended", () => {
      int.value += 500;
      var randomNum = Math.floor(Math.random() * songArrayToExclude.length);
      var roll = songArrayToExclude.splice(randomNum, 1);
      index = roll;
      console.log(songArrayToExclude);
      console.log(index);

      if (songArrayToExclude.length === 0) {
        for (var i = 1; i <= words.length - 1; i++) {
          songArrayToExclude.push(i);
        }
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
      startFade,
      stopFade,
    };
  },
};
</script>

<style>
body {
  background-color: #213f20;
}
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
</style>
