<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar></Navbar>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-primary"
      >
        <q-route-tab :to="{ name: 'Home' }" dense name="timer" icon="eva-clock" />
        <q-route-tab
          dense
          :to="{ name: 'About' }"
          name="settings"
          icon="eva-question-mark-circle-outline"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style>
.q-toolbar {
  color: white;
}

header {
  background-color: rgba(46, 47, 71, 1);
  height: 50px;
  font-size: 50px;
}
</style>
