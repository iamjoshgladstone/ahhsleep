<template>
  <div v-touch-swipe.horizontal="userHasSwiped">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "App",

  setup() {
    const router = useRouter();
    const userHasSwiped = (obj) => {
      console.log(obj.direction);
      if (obj.direction === "left") {
        router.push({ name: "About" });
      } else if (obj.direction === "right") {
        router.push({ name: "Home" });
      }
    };
    return { userHasSwiped };
  },
});
</script>
