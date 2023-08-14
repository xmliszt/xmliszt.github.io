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
    #9000ff 34%,
    #00f7fff7 71%,
    rgba(30, 49, 54, 0) 100%
  );
}

.divider.right {
  background: linear-gradient(
    90deg,
    rgba(30, 49, 54, 0) 0%,
    #00f7fff7 34%,
    #9000ff 71%,
    rgba(30, 49, 54, 0) 100%
  );
}
</style>
