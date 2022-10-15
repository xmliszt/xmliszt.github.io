export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomFloatFromInterval(min, max) {
  // min and max included
  return Math.random() * (max - min + 1) + min;
}
