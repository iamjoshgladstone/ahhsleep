<template>
  <q-page class="column justify-center items-center q-pa-lg q-mt-xl">
    <h2>Test Page</h2>
    <q-btn
      size="22px"
      class="q-px-xl q-py-xs"
      color="purple"
      label="CARS"
      @click="setTag('banana')"
    />
    <q-btn
      size="22px"
      class="q-px-xl q-py-xs"
      color="purple"
      label="Nature"
      @click="setTag('nature')"
    />

    <q-dialog
      v-model="showTimer"
      persistent
      maximized
      full-width
      full-height
      position="standard"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <Home :wordList="wordList">
        <q-btn
          size="16px"
          class="q-px-xl q-py-xs q-mt-l"
          style="background: red"
          label="Close"
          roundedpush
          @click="showTimer = false"
        >
        </q-btn>
      </Home>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../firebase/config";
import Home from "../pages/Home.vue";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useWords } from "../pinia/words.js";

const store = useWords();

const wordList = ref([]);

const tag = ref(null);
const targetWords = ref([]);
const showTimer = ref(false);

const setTag = (input) => {
  showTimer.value = true;
  wordList.value = store.wordPlaylist(input);

  // targetWords.value = [];
  // console.log(targetWords.value);
  // tag.value = input;
  // const q = query(collection(db, "words"), where("tags", "array-contains", tag.value));
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     targetWords.value.push(doc.data().fileURL);
  //   });
  // });
};
</script>

<style></style>
