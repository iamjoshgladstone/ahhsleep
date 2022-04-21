<template>
  <h2>Test Page</h2>
  <q-btn
    size="22px"
    class="q-px-xl q-py-xs"
    color="purple"
    label="Animals"
    @click="setTag('animals')"
  />
  <q-btn
    size="22px"
    class="q-px-xl q-py-xs"
    color="purple"
    label="Nature"
    @click="setTag('nature')"
  />
  <pre>{{ targetWords }}</pre>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const tag = ref(null);
const targetWords = ref([]);

const setTag = (input) => {
  targetWords.value = [];
  console.log(targetWords.value);
  tag.value = input;
  const q = query(
    collection(db, "words"),
    where("tags", "array-contains", tag.value)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      targetWords.value.push(doc.data().fileURL);
    });
  });
};
</script>

<style></style>
