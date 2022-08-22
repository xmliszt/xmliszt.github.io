<template>
  <main>
    <ParallaxView @scroll="this.handleScroll" />
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
import ParallaxView from "./components/ParallaxView.vue";

export default {
  components: {
    AuthButton,
    ParallaxView,
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
#login {
  display: block;
  position: absolute;
  top: 35px;
  right: 40px;
}
</style>
