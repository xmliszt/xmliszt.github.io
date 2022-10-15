<template>
  <main>
    <div class="scroller" :style="scrollerStyle">
      <FishScroller />
    </div>
    <div class="menu" id="menu">
      <button class="icon-button hover-effect" @click="toggleMenu">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
    </div>
    <div class="menu-body hide" id="menu-body">
      <button @click="navigateTo('')">Top</button>
      <button @click="navigateTo('tagline')">Summary</button>
      <button @click="navigateTo('projects')">Projects</button>
      <button @click="navigateTo('skills')">Skills</button>
    </div>
    <div class="parallax-bottom" :style="parallaxBottomStyle"><div></div></div>
    <div class="parallax-stars">
      <FishStar v-for="n in 50" :key="n" />
    </div>
    <FishAvatar class="parallax-avatar" ref="avatarView" />
    <div class="parallax-title">
      <h1>{{ landingTitle }}</h1>
    </div>
    <FishSpacer height="50vh" />
    <div class="parallax-mountain"></div>
    <div class="content-wrapper">
      <FishSpacer height="300px" />
      <section id="tagline">
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
      <FishDivider label="Skills" />
      <section id="skills">
        <div>
          <SkillCard
            v-for="skillData in skills"
            :key="skillData.title"
            :title="skillData.title"
            :skills="skillData.skills"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SkillsOverview from "./components/SkillsOverview.vue";
import FishCard from "./components/generic/FishCard.vue";
import { getSkills } from "./services/SkillsService";
import { getProjects } from "./services/ProjectService";
import FishDivider from "./components/generic/FishDivider.vue";
import FishScroller from "./components/generic/FishScroller.vue";
import SkillCard from "./components/SkillCard.vue";
import FishStar from "./components/generic/FishStar.vue";
import FishAvatar from "./components/generic/FishAvatar.vue";
import FishSpacer from "./components/generic/FishSpacer.vue";

export default {
  components: {
    FishAvatar,
    FishStar,
    SkillsOverview,
    FishCard,
    FishDivider,
    FishScroller,
    SkillCard,
    FishSpacer,
    FontAwesomeIcon,
  },
  data() {
    return {
      isMenuOpen: false,
      landingTitle: "Hi! I'm Li Yuxuan. Nice to meet you! 🙌🏻",
      authBtnOpacity: 1,
      authBtnHidden: false,
      projects: [],
      scrollerStyle: { opacity: 1 },
      parallaxBottomStyle: {
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        "z-index": -2,
      },
      skills: [],
    };
  },
  methods: {
    toggleMenu() {
      let menuBody = document.getElementById("menu-body");
      if (this.isMenuOpen) {
        menuBody.classList.remove("show");
        this.isMenuOpen = false;
      } else {
        menuBody.classList.add("show");
        this.isMenuOpen = true;
      }
    },
    navigateTo(hash) {
      location.hash = "#" + hash;
    },
    handleMainScroll() {
      let yOffset = window.scrollY;
      console.log(`Window Scrolling: ${yOffset}`);
      this.scrollerStyle.opacity = Math.max(0, 1 - yOffset / 200);
      this.parallaxBottomStyle.top = `${-yOffset * 0.2}px`;
      if (yOffset > 300) {
        if (!this.$refs.avatarView.$el.classList.contains("minimized")) {
          this.$refs.avatarView.$el.classList.add("minimized");
          this.$refs.avatarView.$el.classList.toggle("drop-shadow-dark");
        }
      } else {
        this.$refs.avatarView.$el.classList.remove("minimized");
        this.$refs.avatarView.$el.classList.remove("drop-shadow-dark");
      }
    },
    handleMainClicked(e) {
      if (
        !document.getElementById("menu-body").contains(e.target) &&
        !document.getElementById("menu").contains(e.target)
      ) {
        document.getElementById("menu-body").classList.remove("show");
        this.isMenuOpen = false;
      }
    },
    async loadProjects() {
      try {
        this.projects = await getProjects();
      } catch (err) {
        alert(err.message);
      }
    },
    async loadSkills() {
      try {
        this.skills = await getSkills();
      } catch (err) {
        alert(err.message);
      }
    },
  },
  created() {
    // TODO: Call these methods via the scroll controller based on scrolling position instead
    this.loadProjects();
    this.loadSkills();
  },
  mounted() {
    document.addEventListener("scroll", this.handleMainScroll);
    document.addEventListener("click", this.handleMainClicked);
  },
  unmounted() {
    document.removeEventListener("scroll", this.handleMainScroll);
    document.removeEventListener("click", this.handleMainClicked);
  },
};
</script>

<style>
.scroller {
  width: 100%;
  position: fixed;
  bottom: 70px;
  z-index: 10;
}

section {
  min-height: 100vh;
  padding-bottom: var(--section-gap);
  padding-top: var(--section-gap);
}

#tagline {
  position: relative;
}

#projects > div {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  grid-gap: 4rem;
}

#skills > div {
  margin: 10px 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 50px;
}

#skills > div > div {
  flex: 1 auto;
}

@media (max-width: 1368px) {
  #projects > div {
    grid-template-columns: auto;
  }
}
</style>

<style>
main {
  overflow-x: hidden;
}
.menu {
  position: fixed;
  top: 10px;
  left: 15px;
  z-index: 2;
}
.menu-body {
  position: fixed;
  border-radius: 15px;
  top: 60px;
  left: 30px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.196);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition-property: transform;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  transform-origin: 0% 0%;
}

.menu-body.show {
  transform: scale(1) !important;
}

.menu-body.hide {
  transform: scale(0);
}

.menu-body button {
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 30px;
  margin: 0px;
  padding: 0px;
  border-radius: 20px;
  border-width: 1px;
  background: rgba(0, 0, 0, 0.275);
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px 0px;
}

.menu button {
  width: 50px;
  height: 50px;
}

@media (hover: hover) {
  .menu-body button:hover {
    transform: scale(1.1);
    color: #fff;
  }
}

.parallax-stars {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.parallax-title {
  position: fixed;
  z-index: -1;
  width: 40vw;
  top: 30vh;
  left: 10vw;
  animation: floating 5s ease-in-out infinite;
}
.parallax-avatar {
  position: fixed;
  z-index: 1;
  top: 15vh;
  right: 20vw;
  animation: floating 5s ease-in-out infinite;
}
.minimized {
  width: 25px !important;
  height: 25px !important;
  top: 20px !important;
  right: 15px !important;
  border-width: 2px !important;
  transition-property: width, height, border-width, border-radius, top, right !important;
  transition-duration: 0.5s !important;
  transition-timing-function: ease-in-out !important;
}
.content-wrapper {
  background-color: var(--color-black);
}
.parallax-mountain {
  background: url("/src/assets/images/bg-mount.png") no-repeat top center;
  background-size: cover;
  border: none;
  width: 100vw;
  aspect-ratio: 2.1;
}
.parallax-bottom > div {
  height: 100vh;
  width: 100vw;
  background: url("/src/assets/images/bg-header.jpg") top center;
  background-size: cover;
  pointer-events: none;
}
</style>

<style>
@keyframes floating {
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
