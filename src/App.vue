<template>
  <div>
    <router-view v-slot="{ Component }">
      <q-slide-transition>
        <component :is="Component"></component>
      </q-slide-transition>
    </router-view>
  </div>
</template>
<script setup>
// v-touch-swipe.horizontal="userHasSwiped"
// import { useRouter } from "vue-router";

// const router = useRouter();
// const userHasSwiped = (obj) => {
//   console.log(obj.direction);
//   if (obj.direction === "left") {
//     router.push({ name: "About" });
//   } else if (obj.direction === "right") {
//     router.push({ name: "Home" });
//   }
// };
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease-out;
}
</style>
