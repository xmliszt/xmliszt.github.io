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
    <FishDivider label="Projects" />
    <section id="projects">
      <div>
        <FishCard
          class="fish-card"
          v-for="(project, idx) in projects"
          :key="idx"
          :project="project"
        />
      </div>
    </section>
    <FishDivider label="Photography" />
    <section id="photography">
      <div>Photo</div>
    </section>
  </main>
</template>

<script>
import AuthButton from "./components/AuthButton.vue";
import ParallaxView from "./components/ParallaxView.vue";
import SkillsOverview from "./components/SkillsOverview.vue";
import FishCard from "./components/generic/FishCard.vue";
import { getProjects } from "./services/ProjectService";
import FishDivider from "./components/generic/FishDivider.vue";

export default {
  components: {
    AuthButton,
    ParallaxView,
    SkillsOverview,
    FishCard,
    FishDivider,
  },
  data() {
    return {
      authBtnOpacity: 1,
      authBtnHidden: false,
      projects: [],
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
    async loadProjects() {
      try {
        this.projects = await getProjects();
      } catch (err) {
        alert(err.message);
      }
    },
  },
  created() {
    // TODO: Call these methods via the scroll controller based on scrolling position instead
    this.loadProjects();
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
section {
  min-height: 100vh;
  margin-bottom: var(--section-gap);
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

#projects {
  padding: 25px;
}

#projects > div {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  grid-gap: 4rem;
}

@media (max-width: 1368px) {
  #projects > div {
    grid-template-columns: auto;
  }
}
</style>
