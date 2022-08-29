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
  </main>
</template>

<script>
import AuthButton from "./components/AuthButton.vue";
import ParallaxView from "./components/ParallaxView.vue";
import SkillsOverview from "./components/SkillsOverview.vue";
import FishCard from "./components/generic/FishCard.vue";

export default {
  components: {
    AuthButton,
    ParallaxView,
    SkillsOverview,
    FishCard,
  },
  data() {
    return {
      authBtnOpacity: 1,
      authBtnHidden: false,
      projects: [
        {
          title: "Resume Generator",
          details:
            "Resume Generator produces resume based on your data uploaded. Writing resume cannot be simpler!",
          imgUrl:
            "https://images.unsplash.com/photo-1661630807560-654a6b3735bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
          link: "https://www.google.com",
        },
        {
          title: "Portfolio",
          details:
            "My very own portfolio website. A playground for CSS animations. I aim to achieve 'Apple-like' user experience.",
          imgUrl:
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          link: "https://www.google.com",
        },
        {
          title: "iPhone 14 Simulator",
          details:
            "No money to buy an iPhone 14? No worries! This simulator will give you first-hand virtual experience of owning an iPhone 14.",
          imgUrl:
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          link: "https://www.google.com",
        },
      ],
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

#projects {
  padding: 25px;
}

#projects > div {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
}

@media (max-width: 1024px) {
  #projects > div {
    grid-template-columns: auto;
  }
}
</style>
