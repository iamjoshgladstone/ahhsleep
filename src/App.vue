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
