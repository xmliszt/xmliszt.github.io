<template>
  <div class="avatar drop-shadow">
    <img :src="imgUrl" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "/src/assets/images/avatar.jpeg",
      imgAlt: "No Image",
    };
  },
};
</script>

<style scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid var(--color-primary);
}

@media (max-width: 768px) {
  .avatar {
    width: 100px;
    height: 100px;
  }
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
