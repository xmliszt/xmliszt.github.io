<template>
  <div class="divider-wrapper">
    <div class="divider left"></div>
    <span>{{ label }}</span>
    <div class="divider right"></div>
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style scoped>
.divider-wrapper > span {
  font-size: 1.5rem;
}
.divider-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 20px;
  align-items: center;
}

.divider {
  height: 1px;
  width: auto;
}

.divider.left {
  background: linear-gradient(
    90deg,
    rgba(30, 49, 54, 0) 0%,
    rgba(255, 28, 247, 0.5046393557422969) 34%,
    rgba(64, 249, 255, 0.639093137254902) 71%,
    rgba(30, 49, 54, 0) 100%
  );
}

.divider.right {
  background: linear-gradient(
    90deg,
    rgba(30, 49, 54, 0) 0%,
    rgba(64, 249, 255, 0.639093137254902) 34%,
    rgba(255, 28, 247, 0.5046393557422969) 71%,
    rgba(30, 49, 54, 0) 100%
  );
}
</style>
