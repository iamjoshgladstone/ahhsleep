<template>
  <h2>Test</h2>
</template>

<script>
export default {
  data() {
    return {
      buttonText: "Start Timer",
      timerStarted: false,
      interval: null,
      currentTimeInSeconds: null,
      words: words,
    };
  },
  watch: {
    minutes(value) {
      this.currentTimeInSeconds = value * 60;
    },
    currentTimeInSeconds(value) {
      if (this.currentTimeInSeconds <= 0) {
        this.stopTimer();
      }
    },
  },
  methods: {
    startTimer() {
      this.timerStarted = !this.timerStarted;

      this.interval = setInterval(() => {
        this.currentTimeInSeconds--;
      }, 1000);
    },
    stopTimer() {
      this.timerStarted = !this.timerStarted;
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.currentTimeInSeconds = this.minutes * 60;
  },
};
// export default {
//   setup() {
//     const minutes = ref(1);
//     const seconds = ref();
//     const speed = ref(0.7);
//     const int = ref(1000);
//     const timerIsStarted = ref(false);
//     const words = ref([
//       "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Car_2.mp3?alt=media&token=acd5f93b-24f4-4ea4-96bd-7bee7a0949f2",
//       "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Chocolate_2.mp3?alt=media&token=7084f378-8427-426f-b4dd-10bd33ba415a",
//       "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Horse_2.mp3?alt=media&token=3cb2c642-c5a6-4cd3-b72f-b9181588baa0",
//       "https://firebasestorage.googleapis.com/v0/b/sleepy-words.appspot.com/o/Rabbit_2.mp3?alt=media&token=4b87217c-c2b7-48c1-b5fd-a039cde4250a",
//     ]);
//     const audioElement = new Audio();

//     var index = 1;

//     const playAudio = () => {
//       audioElement.src = words.value[index];
//       audioElement.play();
//     };

audioElement.addEventListener("ended", () => {
  int.value += 500;
  if (index === 3) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(playAudio, int.value);
});

//     const startTimer = () => {
//       timerIsStarted.value = true;
//       let time = minutes.value * 60;
//       const timer = setInterval(() => {
//         time--;
//         minutes.value = Math.floor(time / 60);
//         let check = time % 60;
//         if (check < 10) {
//           seconds.value = `0` + check;
//         } else {
//           seconds.value = check;
//         }
//       }, 1000);

//       if (time <= 0) {
//         console.log("ended");
//         clearInterval(timer);
//       }
//     };

//     return {
//       startTimer,
//       minutes,
//       seconds,
//       speed,
//       timerIsStarted,
//       words,
//       audioElement,
//       playAudio,
//   };
// },
</script>

<style></style>
