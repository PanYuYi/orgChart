<script setup>
import { ref } from "vue";
</script>

<template>
  <div>
    <canvas id="canvas" type="2d"></canvas>
    <div class="grid-box">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#canvas {
  border: 1px solid blue;
}

.grid-box {
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .item {
  }
}
</style>
