<template>
  <div class="skill-card drop-shadow-dark hover-effect">
    <div class="card-header" aria-label="skill category">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="card-body" aria-label="skills in details">
      <span
        v-for="skill in skills"
        :key="skill"
        aria-label="individual skill label under the category"
      >
        {{ skill }}</span
      >
    </div>
    <div class="card-foot"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "skills"],
};
</script>

<style scoped>
.skill-card {
  padding: 20px;
  padding-top: 0px;
  border-radius: 25px;
  background-color: var(--color-white);
}
.skill-card .card-header {
  word-wrap: normal;
}

.card-header h1 {
  font-weight: bolder;
  font-size: var(--font-large);
  background: linear-gradient(to right, #f918b1f7, #9718f9f7 50%, #32d6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-card .card-body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.card-body span {
  padding: 5px 10px;
  border-radius: 24px;
  background: linear-gradient(to right, #f918b1f7, #9718f9f7 50%, #32d6ff 100%);
}

.card-body span::before {
  content: "//";
}
@media (max-width: 567px) {
  .skill-card {
    width: 90vw;
  }

  .card-header h1 {
    font-size: 1rem;
  }
}
</style>
