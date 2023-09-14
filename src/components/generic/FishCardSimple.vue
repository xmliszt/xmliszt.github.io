<template>
  <div
    ref="fishCardSimple"
    class="fish-card-simple hover-effect drop-shadow-dark"
    @click="directTo"
  >
    <FishHot label="HOT" v-show="project.hot" />
    <img class="image" :src="project.imgUrl" alt="project thumbnail" />
    <div class="bottom">
      <div class="title" aria-label="project title">
        {{ project.title }}
        <span v-show="project.titleTag !== undefined" class="title-subtag"
          ><img alt="Static Badge" :src="project.titleTag" />
        </span>
      </div>
      <div class="details" aria-label="project details">
        {{ project.details }}
      </div>
    </div>
  </div>
</template>

<script>
import FishHot from "@/components/generic/FishHot.vue";

export default {
  components: {
    FishHot,
  },
  props: ["project"],
  data() {
    return { interactionRemovalDelay: 2000, backgroundImgUrl: "" };
  },
  methods: {
    directTo() {
      window.open(this.project.link, "__blank");
    },
  },
};
</script>

<style scoped>
.fish-card-simple {
  border-radius: 20px;
  overflow: hidden;
  background-color: #0f1b1d;
}

.fish-card-simple:hover {
  cursor: pointer;
}

.fish-card-simple > img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}

.fish-card-simple > div.bottom {
  padding: 20px;
}

.fish-card-simple > div.bottom > div.title {
  font-size: 1.6rem;
}

.fish-card-simple > div.bottom > div.details {
  font-size: 1rem;
}
</style>
