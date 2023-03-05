<template>
  <div
    ref="fishCard"
    class="fish-card"
    :style="setBackground()"
    @click="directTo"
  >
    <div class="glow"></div>
    <div class="fish-card-overlay">
      <span class="title" aria-label="project title">{{ project.title }}</span>
      <span class="details" aria-label="project details">{{
        project.details
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return { interactionRemovalDelay: 2000, backgroundImgUrl: "" };
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
  -webkit-transition: all 0.5s ease-in-out;
  background-color: var(--color-black);
  border-radius: 24px;
  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  border: 2px solid var(--color-accent);
  background-size: 45vw !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
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
    rgba(0, 0, 0, 0.485) 100%
  );
  transition-property: bottom;
  transition-duration: 300ms;
  padding: 20px 50px 25px 25px;
  z-index: 0;
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

@media (hover: hover) {
  .fish-card:hover div.glow {
    transform: translate(1100%);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .fish-card:hover {
    cursor: pointer;
    box-shadow: var(--drop-shadow-dark) 0px 0px 0px 0px;
    background-size: 50vw !important;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    opacity: 100%;
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
}

@media (min-width: 1024px) {
  .fish-card {
    filter: blur(2px);
    -webkit-filter: blur(2px);
    opacity: 70%;
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
    max-height: 40vh;
    background-size: 120vh !important;
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
}
</style>
