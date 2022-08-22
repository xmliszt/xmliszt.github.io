<template>
  <div class="parallax">
    <div class="parallax-background">
      <div>
        <h1>Hi I'm <b>Li Yuxuan</b>. Nice to meet you! 🙌🏻</h1>
      </div>
    </div>
    <div class="parallax-fixed">
      <div>
        <AvatarView />
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
};
</script>
