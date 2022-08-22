<template>
  <div
    class="parallax"
    :class="[scrollingEnable ? scrollingEnableClass : scrollingDisableClass]"
    ref="parallax"
    @scroll="this.handleScroll"
  >
    <div class="parallax-background">
      <div>
        <h1>Hi! I'm Li Yuxuan. Nice to meet you! 🙌🏻</h1>
      </div>
    </div>
    <div class="parallax-fixed">
      <div>
        <AvatarView ref="avatarView" />
      </div>
    </div>
    <div class="parallax-base">
      <div>
        <div class="header-mountain"></div>
        <div class="background"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarView from "./AvatarView.vue";
export default {
  components: {
    AvatarView,
  },
  data() {
    return {
      scrollingEnable: true,
      scrollingEnableClass: "scrolling-enable",
      scrollingDisableClass: "scrolling-disable",
    };
  },
  methods: {
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.scrollingEnable = false;
      }
    },
    enableScroll() {
      this.scrollingEnable = true;
    },
  },
};
</script>

<style scoped>
.parallax {
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  perspective: 2px;
  -webkit-perspective: 2px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.scrolling-enable {
  overflow-y: auto;
}

.scrolling-disable {
  overflow-y: hidden;
}

.parallax::-webkit-scrollbar {
  display: none;
}

div[class*="parallax-"] {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.parallax-background > div {
  display: block;
  height: 100vh;
  background: url("../assets/images/bg-header.jpg") top center;
  background-size: cover;
}

.parallax-background div > h1 {
  max-width: 40vw;
  position: absolute;
  top: 30vh;
  left: 10vw;
}

div.parallax-background {
  transform: translateZ(-2px) scale(2.1);
  -webkit-transform: translateZ(-2px) scale(2.1);
}

div.parallax-base {
  pointer-events: none;
  padding: 30vh 0px 0px 0px;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

div.parallax-fixed {
  transform: translateZ(-1px) scale(1.5);
  -webkit-transform: translateZ(-1px) scale(1.5);
}

.header-mountain {
  height: calc(100vw * 0.4757);
  background: url("../assets/images/bg-mount.png") no-repeat top center;
  background-size: cover;
  border: none;
}

.background {
  margin: -10px;
  height: 50vh;
  background-color: #1e3136;
  border: none;
}

@media (max-width: 1024px) {
  .parallax {
    height: 100vh;
  }

  .background {
    height: 70vh;
  }

  .header-mountain {
    height: calc(100vh * 0.7);
  }
}

.parallax-fixed > div {
  display: flex;
  justify-content: center;
  padding-top: 20vh;
  padding-left: 50vw;
}
.parallax div {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  outline: none;
}

@media (max-width: 1024px) {
  .parallax-background div > h1 {
    top: 25vh;
    max-width: 50vw;
  }
  #avatar {
    top: 15vh;
    left: calc(70vw - 50px);
  }
}

@media (max-width: 800px) {
  .parallax-background div > h1 {
    top: 20vh;
  }
}
</style>
