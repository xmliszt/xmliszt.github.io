<template>
  <header>
    <div class="test rounded-corner box-shadow">
      <div class="test">
        <div>
          <h1>HELLO</h1>
          <h3>THERE</h3>
        </div>
      </div>
    </div>
  </header>

  <main></main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.test {
  width: 70vw;
  height: 50vh;
  background-color: var(--primary-dark);
}

.test .test {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-text-light-1);
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
