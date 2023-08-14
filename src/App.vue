<template>
  <main id="top">
    <div class="scroller" :style="scrollerStyle">
      <FishScroller />
    </div>
    <div class="menu" id="menu">
      <button
        aria-label="page quick navigation"
        class="icon-button hover-effect"
        @mouseover="toggleMenu"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
    </div>
    <div class="menu-body hide" id="menu-body">
      <button
        @click="navigateTo('top')"
        aria-label="navigate to top of the page"
      >
        Top
      </button>
      <button
        @click="navigateTo('tagline')"
        aria-label="navigate to tagline section"
      >
        Summary
      </button>
      <button
        @click="navigateTo('packages')"
        aria-label="navigate to packages section"
      >
        Packages
      </button>
      <button
        @click="navigateTo('projects')"
        aria-label="navigate to projects section"
      >
        Projects
      </button>
      <button
        @click="navigateTo('skills')"
        aria-label="navigate to skills section"
      >
        Skills
      </button>
    </div>
    <div class="parallax-bottom" :style="parallaxBottomStyle">
      <span role="img" aria-label="Background Sky"></span>
    </div>
    <div class="parallax-stars">
      <FishStar v-for="n in 50" :key="n" />
    </div>
    <FishAvatar class="parallax-avatar" ref="avatarView" />
    <div class="parallax-title">
      <h1 aria-label="My greeting to you">{{ landingTitle }}</h1>
    </div>
    <FishSpacer height="50vh" />
    <div class="parallax-mountain">
      <span role="img" aria-label="Mountain Parallax"></span>
    </div>
    <div class="content-wrapper">
      <FishSpacer height="300px" />
      <section id="tagline" aria-label="tagline section">
        <SkillsOverview />
      </section>
      <FishDivider label="Packages" id="packages" />
      <section id="section-packages" aria-label="packages section">
        <FishLoader
          :active="isPackageLoading"
          label="Fetching packages information from database..."
        />
        <div>
          <FishCardSimple
            :key="idx"
            v-for="(_package, idx) in packages"
            class="fish-card"
            :project="_package"
          />
        </div>
      </section>
      <FishDivider label="Projects" id="projects" />
      <section id="section-projects" aria-label="projects section">
        <FishLoader
          :active="isProjectLoading"
          label="Fetching projects information from database..."
        />
        <div>
          <FishCardSimple
            :key="idx"
            v-for="(project, idx) in projects"
            class="fish-card"
            :project="project"
          />
        </div>
      </section>
      <FishDivider label="Skills" id="skills" />
      <section id="section-skills" aria-label="skills showcase section">
        <FishLoader
          :active="isSkillLoading"
          label="Fetching skills information from database..."
        />
        <div class="skills-wrapper">
          <SkillCard
            v-for="skillData in skills"
            :key="skillData.title"
            :title="skillData.title"
            :skills="skillData.skills"
          />
        </div>
      </section>
      <BottomCampFire />
    </div>
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SkillsOverview from "@/components/SkillsOverview.vue";
import FishCardSimple from "@/components/generic/FishCardSimple.vue";
import FishDivider from "@/components/generic/FishDivider.vue";
import FishScroller from "@/components/generic/FishScroller.vue";
import SkillCard from "@/components/SkillCard.vue";
import FishStar from "@/components/generic/FishStar.vue";
import FishAvatar from "@/components/generic/FishAvatar.vue";
import FishSpacer from "@/components/generic/FishSpacer.vue";
import BottomCampFire from "@/components/BottomCampFire.vue";
import FishLoader from "@/components/generic/FishLoader.vue";
import { getPackages } from "@/services/PackageService";
import { getSkills } from "@/services/SkillsService";
import { getProjects } from "@/services/ProjectService";

export default {
  components: {
    FishAvatar,
    FishStar,
    SkillsOverview,
    FishCardSimple,
    FishDivider,
    FishScroller,
    SkillCard,
    FishSpacer,
    FontAwesomeIcon,
    BottomCampFire,
    FishLoader,
  },
  data() {
    return {
      isMenuOpen: false,
      landingTitle: "Hi 🙌🏻 I'm Li Yuxuan. I am a Software Engineer. 💻",
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
        display: "flex",
      },
      skills: [],
      isPackageLoading: false,
      isProjectLoading: false,
      isSkillLoading: false,
    };
  },
  methods: {
    toggleMenu() {
      let menuBody = document.getElementById("menu-body");
      if (!menuBody.classList.contains("show")) {
        menuBody.classList.add("show");
        this.isMenuOpen = true;
      }
    },
    navigateTo(hash) {
      location.hash = "#" + hash;
    },
    handleMainScroll() {
      let yOffset = window.scrollY;
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
        this.isProjectLoading = true;
        this.projects = await getProjects();
      } catch (err) {
        alert(err.message);
      } finally {
        this.isProjectLoading = false;
      }
    },
    async loadSkills() {
      try {
        this.isSkillLoading = true;
        this.skills = await getSkills();
      } catch (err) {
        alert(err.message);
      } finally {
        this.isSkillLoading = false;
      }
    },
    async loadPackages() {
      try {
        this.isPackageLoading = true;
        this.packages = await getPackages();
      } catch (err) {
        alert(err.message);
      } finally {
        this.isPackageLoading = false;
      }
    },
  },
  created() {
    // TODO: Call these methods via the scroll controller based on scrolling position instead
    this.loadPackages();
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
  padding-top: var(--section-gap);
  padding-bottom: var(--section-gap);
  padding-left: 40px;
  padding-right: 40px;
}

#tagline {
  position: relative;
  height: 50vh;
}

#section-packages > div {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  width: 100%;
}

#section-projects > div {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  width: 100%;
}

#section-skills > div.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 50px;
}

#section-skills > div > div {
  flex: 1 auto;
}

@media (max-width: 1024px) {
  #section-packages > div {
    grid-template-columns: auto;
  }

  #section-projects > div {
    grid-template-columns: auto;
  }

  #section-skills > div {
    gap: 20px;
  }
}
</style>

<style>
.menu {
  position: fixed;
  top: 10px;
  left: 15px;
  z-index: 99;
}
.menu-body {
  position: fixed;
  border-radius: 15px;
  top: 60px;
  left: 30px;
  z-index: 99;
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px;
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

@media (max-width: 1024px) {
  .menu-body button {
    color: #fff;
  }
}

@media (hover: hover) {
  .menu button:hover {
    transform: rotate(90deg);
    transition-timing-function: ease-in-out;
  }
  .menu-body button:hover {
    transform: scale(1.1);
    color: #fff;
  }
}

.parallax-stars {
  pointer-events: none;
  position: absolute;
  overflow: hidden;
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
  width: 60vw;
  top: 30vh;
  left: 10vw;
  animation: floating 5s ease-in-out infinite;
  animation-delay: 1s;
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
  width: 100%;
  overflow-x: hidden;
}

.parallax-mountain {
  display: flex;
}

.parallax-mountain > span {
  background: url("https://github.com/xmliszt/resources/blob/main/portfolio/bg-mount.png?raw=true")
    no-repeat top center;
  background-size: cover;
  border: none;
  width: 100%;
  aspect-ratio: 2.1;
}
.parallax-bottom > span {
  height: 100%;
  width: 100%;
  background: url("https://github.com/xmliszt/resources/blob/main/portfolio/bg-header.jpg?raw=true")
    top center;
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
