<template>
  <div class="fish-scroller">
    <div><span></span></div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.fish-scroller {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  text-align: center;
}

.fish-scroller div {
  position: relative;
  width: 2px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
}

.fish-scroller span {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2px;
  height: 20px;
  background-color: white;
  animation: scroller-effect 1s ease-in-out infinite;
}
</style>

<style>
@keyframes scroller-effect {
  0% {
    top: 0px;
    height: 0px;
  }
  20% {
    top: 0px;
    height: 20px;
  }
  80% {
    top: calc(80px);
    height: 20px;
  }
  100% {
    top: 100px;
    height: 0px;
  }
}
</style>
