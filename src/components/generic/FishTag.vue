<template>
  <div class="fish-tag" aria-label="tag">{{ label.toUpperCase() }}</div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style scoped>
.fish-tag {
  padding: 5px 15px;
  border-radius: 20px;
  background-color: white;
  color: var(--color-accent);
}
</style>
