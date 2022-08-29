<template>
  <div class="fish-card">
    <div class="fish-card-bg" :style="setBackgroundStyles()"></div>
    <div class="glow"></div>
    <div class="fish-card-overlay">
      <span class="title">{{ project.title }}</span>
      <span class="details">{{ project.details }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
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
      };
    },
  },
};
</script>

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
  height: 50%;
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
  padding: 25px;
}

span {
  display: block;
}
span.title {
  font-size: var(--font-large);
  margin-bottom: 20px;
}

span.detials {
  font-size: var(--font-small);
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
}

@media (max-width: 1024px) {
  .fish-card {
    width: 80vw;
  }

  .fish-card div.fish-card-overlay {
    height: 100%;
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
}
</style>
