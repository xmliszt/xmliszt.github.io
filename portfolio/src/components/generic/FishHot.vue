<template>
  <div class="hot" aria-label="hot tag">{{ label || "HOT" }}</div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style scoped>
.hot {
  position: absolute;
  background-color: rgb(246, 90, 62);
  top: -10px;
  right: -10px;
  z-index: 999;
  font-size: 1.2rem;
  padding: 0px 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 30px rgba(255, 170, 114, 0.819);
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0% {
    box-shadow: 0px 0px 50px rgba(255, 170, 114, 1);
    transform: scale(1.2);
  }
  50% {
    box-shadow: 0px 0px 2px rgba(255, 170, 114, 0.2);
    transform: scale(1);
  }
  100% {
    box-shadow: 0px 0px 50px rgba(255, 170, 114, 1);
    transform: scale(1.2);
  }
}
</style>
