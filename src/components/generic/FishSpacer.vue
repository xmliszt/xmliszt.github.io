<template>
  <div class="fish-spacer" :style="style"></div>
</template>

<script>
export default {
  props: ["height"],
  data() {
    return {
      style: {
        "pointer-events": "none",
        height: this.height,
        width: "100%",
      },
    };
  },
};
</script>
