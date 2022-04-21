<template>
  <div>
    <router-view />
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

/*set opacity to 0 at element's entrance and exit*/
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
