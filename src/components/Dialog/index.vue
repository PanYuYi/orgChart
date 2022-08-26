<script setup name="Dialog">
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "标题",
  },
  zIndex: {
    type: Number,
    default: 99,
  },
});
</script>
<template>
  <div
    class="dialog"
    v-if="show"
    :style="{
      'z-index': zIndex,
    }"
  >
    <div class="dialog-box">
      <div class="dialog-title">{{ title }}</div>
      <div class="dialog-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dialog {
  z-index: 99;
  position: fixed;
  overflow: auto;
  padding: 20px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.4);
  .Dialog-box {
    width: 480px;
    min-height: 240px;
    background-color: #fff;
    border-radius: 10px;
    margin: auto;
    margin-top: 200px;
    .Dialog-title {
      font-size: 16px;
      color: #262626;
      font-weight: 600;
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ebebeb;
    }
    .Dialog-content {
      font-size: 14px;
      color: #323232;
      padding: 10px;
    }
  }
}
</style>
