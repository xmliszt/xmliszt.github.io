<template>
  <div class="avatar drop-shadow-light morph-hover-effect">
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
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .avatar {
    width: 100px;
    height: 100px;
  }
}

.avatar img {
  width: 120%;
  height: 120%;
}
</style>
