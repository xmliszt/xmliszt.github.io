<template>
  <main>
    <div class="parallax" @scroll="this.handleScroll">
      <div class="parallax-background">
        <div>
          <h1>Hi I'm <b>Li Yuxuan</b>. Nice to meet you! 🙌🏻</h1>
        </div>
      </div>
      <div class="parallax-base">
        <div>
          <div class="header-mountain"></div>
          <div class="background"></div>
        </div>
      </div>
    </div>
    <div id="login">
      <AuthButton
        ref="authBtn"
        :style="{ opacity: authBtnOpacity }"
        :hidden="authBtnHidden"
      />
    </div>
  </main>
</template>

<script>
import AuthButton from "./components/AuthButton.vue";

export default {
  components: {
    AuthButton,
  },
  data() {
    return {
      authBtnOpacity: 1,
      authBtnHidden: false,
    };
  },
  methods: {
    handleScroll(e) {
      this.authBtnOpacity = 1 - (e.target.scrollTop / window.innerHeight) * 2;
      this.authBtnHidden = e.target.scrollTop > window.innerHeight / 2;
    },
  },
};
</script>

<style>
.parallax {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  perspective: 1px;
  -webkit-perspective: 1px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
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
  background: url("./assets/images/bg-header.jpg") top center;
  background-size: cover;
}

.parallax-background div > h1 {
  max-width: 80vw;
  position: absolute;
  top: 35vh;
  left: 10vw;
}

@media (max-width: 1136px) {
  .parallax-background div > h1 {
    top: 25vh;
  }
}

@media (max-width: 800px) {
  .parallax-background div > h1 {
    top: 15vh;
  }
}

div.parallax-background {
  transform: translateZ(-1px) scale(2.1);
  -webkit-transform: translateZ(-1px) scale(2.1);
}

div.parallax-base {
  padding: 30vh 0px 0px 0px;
  transform: translateZ(0px);
  -webkit-transform: translateZ(0);
}

.header-mountain {
  height: calc(100vw * 0.4757);
  background: url("./assets/images/bg-mount.png") no-repeat top center;
  background-size: cover;
  border: none;
}

.background {
  margin: -10px;
  height: 100vh;
  background-color: #1e3136;
  border: none;
}

#login {
  display: block;
  position: absolute;
  top: 35px;
  right: 40px;
}
</style>
