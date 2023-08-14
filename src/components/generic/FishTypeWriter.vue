<template>
  <div class="typewriter drop-shadow-dark">
    <p aria-label="skills shown as typewritter text">
      I <span class="typed-text">{{ this.typedOutText }}</span>
      <span class="cursor" :class="[isTyping ? isTypingClass : '']"
        >&nbsp;</span
      >
    </p>
  </div>
</template>

<script>
import { randomIntFromInterval } from "/src/utils.js";

export default {
  props: ["skills"],
  emits: [
    "onSentenceChanged",
    "onWaitingForNextSentence",
    "onStartTypingNextSentence",
  ],
  data() {
    return {
      typingDelayMin: 10,
      typingDelayMax: 150,
      erasingDelay: 20,
      newSentenceDelay: 3000,
      charIndex: 0,
      currentSkillIndex: 0,
      isTyping: true,
      isTypingClass: "typing",
      typedOutText: "",
      displayedTag: "",
    };
  },
  methods: {
    buildSentence(skill) {
      return `${skill.verb} ${skill.adj} ${skill.noun} ${
        skill.connection
      } ${skill.tools
        .slice(1)
        .reduce((prev, crrt) => prev + ", " + crrt, skill.tools[0])}.`;
    },
    startTyping() {
      this.$emit("onStartTypingNextSentence");
      let currentSkillObj = this.skills[this.currentSkillIndex];
      let currentSentence = this.buildSentence(currentSkillObj);
      this.$emit("onSentenceChanged", currentSkillObj);
      this.isTyping = this.charIndex < currentSentence.length;
      if (this.isTyping) {
        this.typedOutText += currentSentence[this.charIndex];
        this.charIndex++;
        setTimeout(
          this.startTyping,
          randomIntFromInterval(this.typingDelayMin, this.typingDelayMax)
        );
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
        this.$emit("onWaitingForNextSentence");
        setTimeout(this.startTyping, this.typingDelayMax + 1100);
      }
    },
  },
  created() {
    if (this.skills.length > 0) {
      setTimeout(this.startTyping, this.newSentenceDelay + 250);
    }
  },
  watch: {
    skills: {
      immediate: true,
      handler(newValue) {
        if (newValue.length > 0) {
          setTimeout(this.startTyping, this.newSentenceDelay + 250);
        }
      },
    },
  },
};
</script>

<style scoped>
.typewriter {
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  background-color: #0f1b1d;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 20px;
}

@media (max-width: 576px) {
  .typewriter {
    font-size: 1.5rem;
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
