<template>
  <div class="skills-overview">
    <FishTypeWriter
      class="typewriter"
      :skills="skills"
      @onSentenceChanged="onTypeWriterSentenceChanged"
      @onStartTypingNextSentence="this.isWaiting = false"
      @onWaitingForNextSentence="this.isWaiting = true"
    />
    <FishTag
      class="fish-tag drop-shadow-dark"
      :class="[isWaiting ? tagHideClass : tagShowClass]"
      :label="displayedTag"
    />
  </div>
</template>

<script>
import FishTag from "./generic/FishTag.vue";
import FishTypeWriter from "./generic/FishTypeWriter.vue";

export default {
  components: { FishTag, FishTypeWriter },
  data() {
    return {
      displayedTag: "",
      isWaiting: false,
      tagShowClass: "show",
      tagHideClass: "hide",
      skills: [
        {
          category: "technology",
          verb: "develop",
          adj: "",
          noun: "static websites",
          tools: ["JavaScript", "HTML", "CSS", "VueJS framework"],
        },
        {
          category: "photography",
          verb: "take",
          adj: "beautiful",
          noun: "photos",
          tools: ["O-EM10 MKII", "Photoshop", "Lightroom"],
        },
      ],
    };
  },
  methods: {
    onTypeWriterSentenceChanged(skill) {
      this.displayedTag = skill.category;
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

@media (hover: hover) {
  .fish-tag:hover,
  .typewriter:hover + .fish-tag {
    border-radius: 0px;
    background-color: var(--color-accent);
    border-color: white;
    color: white;
  }
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
