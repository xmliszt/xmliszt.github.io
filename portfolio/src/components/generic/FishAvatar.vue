<template>
  <div class="avatar drop-shadow-light morph-hover-effect" @click="openGithub">
    <img aria-label="profile image" :src="imgUrl" :alt="imgAlt" />
  </div>
</template>

<script>
import avatarImg from "/src/assets/images/avatar.jpeg";
export default {
  data() {
    return {
      imgUrl: avatarImg,
      imgAlt: "No Image",
      githubUrl: "https://github.com/xmliszt",
    };
  },
  methods: {
    openGithub() {
      window.open(this.githubUrl, "_blank");
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
}
</style>
