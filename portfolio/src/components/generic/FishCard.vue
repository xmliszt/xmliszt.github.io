<template>
  <div ref="fishCard" class="fish-card" @click="interact">
    <div class="fish-card-bg" :style="setBackgroundStyles()"></div>
    <div class="glow"></div>
    <div class="fish-card-overlay">
      <span class="title">{{ project.title }}</span>
      <span class="details">{{ project.details }}</span>
    </div>
    <div class="fish-card-expand hover-effect" @click="directTo">
      <div class="circle"><FontAwesomeIcon icon="fa-regular fa-circle" /></div>
      <div class="plus">
        <FontAwesomeIcon icon="fa-solid fa-plus" />
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
    setBackgroundStyles() {
      return {
        background: `url(${this.project.imgUrl}) no-repeat center center`,
        position: "absolute",
        top: 0,
        left: 0,
        "background-size": "cover",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        opacity: 0.7,
        filter: "blur(0px)",
        "-webkit-filter": "blur(0px)",
        transition: "all 0.5s",
        "pointer-events": "none",
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
    transform: rotate(5deg) scale(1.1);
  }
  70% {
    transform: rotate(-5deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>

<style scoped>
.fish-card {
  width: 35vw;
  aspect-ratio: 1.67;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--drop-shadow-dark) 0px 7px 29px 0px;
  transition: box-shadow 0.5s ease-in-out;
  background-color: var(--color-black);
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
  display: flex;
  justify-content: center;
  align-items: center;
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

.fish-card-expand > .circle {
  z-index: 1;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}
.fish-card-expand > .plus {
  z-index: 2;
  opacity: 0;
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}

@media (hover: hover) {
  .fish-card:hover div.glow {
    transform: translate(1100%);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .fish-card:hover {
    box-shadow: var(--drop-shadow-dark) 0px 0px 0px 0px;
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

  .fish-card-expand:hover > .circle {
    transform: scale(1.5);
  }

  .fish-card-expand:hover > .plus {
    opacity: 1;
    transform: rotate(180deg);
  }
}

@media (max-width: 1368px) {
  span.title {
    font-size: var(--font-regular);
    margin-bottom: 12px;
  }

  span.details {
    font-size: var(--font-small);
  }
  .fish-card {
    width: 80vw;
  }

  .fish-card div.fish-card-overlay {
    bottom: 0px;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 0.5) 78%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .fish-card div.fish-card-bg {
    filter: blur(1px);
    -webkit-filter: blur(1px);
  }

  .fish-card-expand > .circle {
    transform: scale(1.5);
  }
  .fish-card-expand > .plus {
    opacity: 1;
  }
}
</style>
