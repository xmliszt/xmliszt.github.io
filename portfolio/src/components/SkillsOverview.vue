<template>
  <div class="skills-overview">
    <div class="typewriter drop-shadow-dark">
      <p>
        I <span class="typed-text">{{ this.typedOutText }}</span>
        <span class="cursor" :class="[isTyping ? isTypingClass : '']"
          >&nbsp;</span
        >
      </p>
    </div>
    <FishTag
      class="fish-tag drop-shadow-dark"
      :class="[isWaiting ? hideClass : showClass]"
      :label="displayedTag"
    />
  </div>
</template>

<script>
import FishTag from "./generic/FishTag.vue";

export default {
  components: { FishTag },
  data() {
    return {
      typingDelay: 100,
      erasingDelay: 50,
      newSentenceDelay: 2000,
      charIndex: 0,
      currentSkillIndex: 0,
      isTyping: true,
      isTypingClass: "typing",
      isWaiting: false,
      showClass: "show",
      hideClass: "hide",
      typedOutText: "",
      displayedTag: "",
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
    buildSentence(skill) {
      return `${skill.verb} ${skill.adj} ${skill.noun} using ${skill.tools
        .slice(1)
        .reduce((prev, crrt) => prev + ", " + crrt, skill.tools[0])}.`;
    },
    startTyping() {
      this.isWaiting = false;
      let currentSkillObj = this.skills[this.currentSkillIndex];
      let currentSentence = this.buildSentence(currentSkillObj);
      this.displayedTag = currentSkillObj.category;
      this.isTyping = this.charIndex < currentSentence.length;
      if (this.isTyping) {
        this.typedOutText += currentSentence[this.charIndex];
        this.charIndex++;
        setTimeout(this.startTyping, this.typingDelay);
      } else {
        setTimeout(this.startErasing, this.newSentenceDelay);
      }
    },
    startErasing() {
      let currentSkillObj = this.skills[this.currentSkillIndex];
      let currentSentence = this.buildSentence(currentSkillObj);
      this.isTyping = this.charIndex > 0;
      if (this.isTyping) {
        this.typedOutText = currentSentence.substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(this.startErasing, this.erasingDelay);
      } else {
        // next sentence
        this.currentSkillIndex++;
        if (this.currentSkillIndex >= this.skills.length)
          this.currentSkillIndex = 0;
        this.isWaiting = true;
        setTimeout(this.startTyping, this.typingDelay + 1100);
      }
    },
  },
  created() {
    if (this.skills.length > 0) {
      this.displayedTag = this.skills[this.currentSkillIndex].category;
      setTimeout(this.startTyping, this.newSentenceDelay + 250);
    }
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

.typewriter {
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  margin: 20px;
  border-radius: 20px;
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

.typewriter span.typed-text {
  background: linear-gradient(to right, #00f7fff7, #9000ff 150%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typewriter span.cursor {
  display: inline-block;
  background: var(--color-primary);
  margin-left: 0.2em;
  width: 8px;
  animation: blink 1s infinite;
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
