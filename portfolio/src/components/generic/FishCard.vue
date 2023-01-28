<template>
  <div ref="fishCard" class="fish-card" @click="directTo">
    <div class="fish-card-bg" :style="setBackground()"></div>
    <div class="glow"></div>
    <div class="fish-card-overlay">
      <span class="title" aria-label="project title">{{ project.title }}</span>
      <span class="details" aria-label="project details">{{
        project.details
      }}</span>
    </div>
    <div
      class="fish-card-expand hover-effect"
      @click="directTo"
      aria-label="{{`Visit project details for: ${project.title}`}}"
    >
      <div class="plus">
        <FontAwesomeIcon icon="fa-solid fa-expand" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  props: ["project"],
  data() {
    return { interactionRemovalDelay: 2000 };
  },
  methods: {
    setBackground() {
      return {
        background: `url(${this.project.imgUrl})`,
      };
    },
    directTo() {
      window.open(this.project.link, "__blank");
    },
    interact() {
      this.$refs.fishCard.classList.add("interaction");
      setTimeout(() => {
        this.$refs.fishCard.classList.remove("interaction");
      }, this.interactionRemovalDelay);
    },
  },
};
</script>

<style>
.interaction {
  animation: interact 1s ease-in-out both;
}

@keyframes interact {
  0% {
    transform: rotate(0deg) scale(1);
  }
  40% {
    transform: rotate(2deg) scale(1.05);
  }
  70% {
    transform: rotate(-2deg) scale(1.05);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>

<style scoped>
.fish-card {
  position: relative;
  width: 35vw;
  aspect-ratio: 1.5;
  position: relative;
  overflow: hidden;
  box-shadow: var(--drop-shadow-dark) 0px 7px 29px 5px;
  transition: all 0.5s ease-in-out;
  background-color: var(--color-black);
  border-radius: 24px;
  border: 2px solid var(--color-accent);
}

.fish-card-bg {
  position: absolute;
  top: calc(-10%);
  left: calc(-10%);
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  width: 120%;
  height: 120%;
  overflow: hidden;
  opacity: 0.7;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  transition: all 0.5s;
  pointer-events: none;
}
.fish-card div.glow {
  display: block;
  position: absolute;
  top: -100px;
  width: 10%;
  height: 200%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translate(-400%) rotate(20deg);
  filter: blur(30px);
  -webkit-filter: blur(30px);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fish-card div.fish-card-overlay {
  box-sizing: border-box;
  position: absolute;
  height: auto;
  width: 100%;
  bottom: -50%;
  left: 0px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.7763480392156863) 37%,
    rgba(0, 0, 0, 0) 100%
  );
  transition-property: bottom;
  transition-duration: 300ms;
  padding: 20px 50px 25px 25px;
}

span {
  display: block;
}
span.title {
  font-size: var(--font-large);
  margin-bottom: 20px;
}

span.details {
  font-size: var(--font-regular);
}

.fish-card div.fish-card-expand {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 50px;
  aspect-ratio: 1;
}

.fish-card-expand div {
  width: 100%;
  height: 100%;
  display: flex;
  aspect-ratio: 1;
  position: absolute;
  justify-content: center;
  align-items: center;
}
.fish-card-expand > .plus {
  z-index: 1;
  color: var(--color-white);
  transform: scale(1) rotate(0deg);
  transition: all 0.3s ease-in-out;
}

@media (hover: hover) {
  .fish-card:hover div.glow {
    transform: translate(1100%);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .fish-card:hover {
    cursor: pointer;
    border-width: 0px;
    box-shadow: var(--drop-shadow-dark) 0px 0px 0px 0px;
  }

  .fish-card:hover div.fish-card-bg {
    filter: blur(0px) !important;
    -webkit-filter: blur(0px) !important;
    opacity: 1 !important;
  }

  .fish-card:hover div.fish-card-bg {
    transform: scale(1.1);
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  .fish-card:hover div.fish-card-overlay {
    bottom: 0px;
  }

  .fish-card-expand:hover {
    cursor: pointer;
  }
  .fish-card-expand:hover > .plus {
    transform: scale(1.5) rotate(180deg);
  }
}

@media (max-width: 1024px) {
  span.title {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  span.details {
    font-size: 0.8rem;
  }
  .fish-card {
    width: 80vw;
    aspect-ratio: 0.6;
    max-height: 80vh;
  }

  .fish-card div.fish-card-overlay {
    bottom: 0px;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 0.5) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .fish-card div.fish-card-bg {
    filter: blur(0px) !important;
    -webkit-filter: blur(0px) !important;
  }

  .fish-card-expand > .circle {
    transform: scale(1.2);
  }
  .fish-card-expand > .plus {
    opacity: 1;
  }
}
</style>
