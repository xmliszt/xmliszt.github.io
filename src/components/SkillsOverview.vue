<template>
  <div class="skills-overview">
    <FishLoader
      :active="isLoading"
      label="Fetching skills summary from database..."
    />
    <FishTypeWriter
      class="typewriter"
      :skills="skills"
      aria-label="skill overview display as animated typewritter text"
      @onSentenceChanged="onTypeWriterSentenceChanged"
      @onStartTypingNextSentence="this.isWaiting = false"
      @onWaitingForNextSentence="this.isWaiting = true"
    />
    <FishTag
      aria-label="skill overview category"
      class="fish-tag drop-shadow-dark"
      :class="[isWaiting ? tagHideClass : tagShowClass]"
      :label="displayedTag"
    />
  </div>
</template>

<script>
import { getTaglines } from "../services/TaglineService";
import FishTag from "./generic/FishTag.vue";
import FishTypeWriter from "./generic/FishTypeWriter.vue";
import FishLoader from "./generic/FishLoader.vue";

export default {
  components: { FishTag, FishTypeWriter, FishLoader },
  created() {
    this._getTaglines();
  },
  data() {
    return {
      displayedTag: "",
      isWaiting: true,
      tagShowClass: "show",
      tagHideClass: "hide",
      skills: [],
      isLoading: false,
    };
  },
  methods: {
    onTypeWriterSentenceChanged(skill) {
      this.displayedTag = "#" + skill.category;
    },
    async _getTaglines() {
      try {
        this.isLoading = true;
        this.skills = await getTaglines();
      } catch (err) {
        alert(err.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.skills-overview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  gap: 12px;
}
.fish-tag {
  margin-top: 0px;
  transform: rotateX(0deg);
  /* transition: margin-top 200ms; */
  border-bottom: 0px solid var(--color-accent);
  transition: all 200ms ease-in-out;
}

.fish-tag.show {
  opacity: 1;
}

.fish-tag.hide {
  opacity: 0;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
