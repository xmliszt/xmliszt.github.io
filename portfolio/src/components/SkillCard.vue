<template>
  <div class="skill-card drop-shadow-dark hover-effect">
    <div class="card-header">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="card-body">
      <span v-for="skill in skills" :key="skill"> {{ skill }}</span>
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
  height: 24px;
  padding: 5px 10px;
  border-radius: 24px;
  background: linear-gradient(to right, #f918b1f7, #9718f9f7 50%, #32d6ff 100%);
}

.card-body span::before {
  content: "//";
}
@media (max-width: 1368px) {
  .skill-card {
    width: 80vw;
  }
}
</style>
