<template>
  <main>
    <ParallaxView ref="parallaxView" @scroll="this.handleScroll" />
    <div id="login">
      <AuthButton
        ref="authBtn"
        :style="{ opacity: authBtnOpacity }"
        :hidden="authBtnHidden"
      />
    </div>
    <section id="skills">
      <SkillsOverview />
    </section>
    <section id="projects">PROJECTS</section>
  </main>
</template>

<script>
import AuthButton from "./components/AuthButton.vue";
import ParallaxView from "./components/ParallaxView.vue";
import SkillsOverview from "./components/SkillsOverview.vue";

export default {
  components: {
    AuthButton,
    ParallaxView,
    SkillsOverview,
  },
  data() {
    return {
      authBtnOpacity: 1,
      authBtnHidden: false,
    };
  },
  methods: {
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      this.authBtnOpacity = 1 - scrollTop / (scrollHeight - clientHeight);
      this.authBtnHidden = scrollTop + clientHeight >= scrollHeight;
    },
    handleMainScroll() {
      if (window.scrollY === 0) {
        this.$refs.parallaxView.enableScroll();
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleMainScroll);
  },
  unmounted() {
    document.removeEventListener("scroll", this.handleMainScroll);
  },
};
</script>

<style>
main {
  overflow: scroll;
}

section {
  height: 100vh;
  margin-top: var(--section-gap);
}

#login {
  display: block;
  position: absolute;
  top: 35px;
  right: 40px;
}

#skills {
  position: relative;
}
</style>
