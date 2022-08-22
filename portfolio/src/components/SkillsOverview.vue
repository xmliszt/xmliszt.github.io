<template>
  <div class="skills-overview">
    <div class="typewriter">
      <h1>{{ this.buildSentence(this.skills[0]) }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          category: "technology",
          verb: "develop",
          adj: "beautiful",
          noun: "static website",
          tools: ["JavaScript", "HTML", "CSS", "VueJS framework"],
        },
      ],
    };
  },
  methods: {
    buildSentence(skill) {
      return `I ${skill.verb} ${skill.adj} ${skill.noun} using ${skill.tools
        .splice(1)
        .reduce((prev, crrt) => prev + ", " + crrt, skill.tools[0])}`;
    },
  },
};
</script>

<style scoped>
.skills-overview {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
