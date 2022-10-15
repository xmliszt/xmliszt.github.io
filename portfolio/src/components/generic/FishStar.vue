<template>
  <div :class="starClassName" :style="starStyle"></div>
</template>

<script>
import { randomFloatFromInterval, randomIntFromInterval } from "../../utils";

export default {
  props: ["size", "duration"],
  data() {
    return {
      starStyle: { animation: "risingStar 100s linear infinite" },
      starClassName: "star small",
    };
  },
  created() {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.availHeight;
    let duration = randomFloatFromInterval(20, 50);
    let delay = randomFloatFromInterval(0, 3);
    let leftOffset = randomIntFromInterval(0, screenWidth);
    this.starStyle = {
      position: "absolute",
      animation: `risingStar ${duration}s linear infinite`,
      "animation-delay": `${delay}s`,
      top: `${screenHeight * 0.9}px`,
      left: `${leftOffset}px`,
    };

    let sizes = ["small", "medium", "large"];
    let sizeIndex = randomIntFromInterval(0, 2);
    let size = sizes[sizeIndex];
    if (size === "small") {
      this.starClassName = "star small";
    } else if (size === "medium") {
      this.starClassName = "star medium";
    } else if (size === "large") {
      this.starClassName = "star large";
    }
  },
};
</script>

<style scoped>
.star {
  background: radial-gradient(ellipse, #ffffff 0%, #ffffff00 100%);
  box-shadow: rgb(255, 255, 255) 0px 0px 5px 0px;
}

.small {
  width: 1px;
  height: 1px;
  border-radius: 0.5px;
}

.medium {
  width: 2px;
  height: 2px;
  border-radius: 1px;
}

.large {
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
}
</style>

<style>
@keyframes risingStar {
  0% {
  }
  100% {
    top: -100px;
  }
}
</style>
