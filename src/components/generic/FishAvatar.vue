<template>
  <div class="avatar drop-shadow-light" @click="openGithub">
    <img aria-label="profile image" :src="imgUrl" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl:
        "https://github.com/xmliszt/resources/blob/main/portfolio/avatar.jpg?raw=true",
      imgAlt: "No Image",
      githubUrl: "/blogs",
    };
  },
  methods: {
    openGithub() {
      window.open(this.githubUrl);
    },
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
  transition-property: width, height, border-width, border-radius, top, right;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  z-index: 99;
}

@media (max-width: 1368px) {
  .avatar {
    width: 100px;
    height: 100px;
  }
}

@media (hover: hover) {
  .avatar:hover {
    cursor: pointer;
  }
}

.avatar img {
  width: 120%;
  height: 120%;
  opacity: 1;
  transition: opacity 0.35s ease-in-out;
}
</style>
