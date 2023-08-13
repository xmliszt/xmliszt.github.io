<template>
  <Transition>
    <div v-if="active" class="fish-loader">
      <FeLoader class="loader-icon" />
      <span v-if="label">{{ label }}</span>
    </div>
  </Transition>
</template>

<script>
import { FeLoader } from "@kalimahapps/vue-icons/fe";
export default {
  components: { FeLoader },
  props: ["label", "active"],
};
</script>

<style>
.fish-loader {
  position: absolute;
  z-index: 30 !important;
  width: 100% !important;
  height: 100% !important;
  left: 0;
  display: flex !important;
  gap: 2rem !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  cursor: not-allowed;
}

.loader-icon {
  font-size: 1.2rem;
  animation: loader 1.5s linear infinite;
}

@keyframes loader {
  0% {
    transform: rotate(0) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1.5);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
