<template>
  <q-layout view="lHh Lpr lFf">
    <header class="q-mt-lg row justify-center items-center text-center">
      <div class="text-gradient">Ahhsleep</div>
    </header>
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
        <q-route-tab
          :to="{ name: 'Home' }"
          dense
          name="timer"
          icon="eva-clock"
        />
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

<script>
export default {
  name: "MainLayout",
};
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
.text-gradient {
  background: #787e99;
  background: -webkit-linear-gradient(to right, #787e99 0%, #656678 100%);
  background: -moz-linear-gradient(to right, #787e99 0%, #656678 100%);
  background: linear-gradient(to right, #787e99 0%, #656678 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
