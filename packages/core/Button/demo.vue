<template>
  <div class="pt-3">
    <Button theme="button">默认按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button theme="link">链接按钮</Button>
  </div>
  <div class="pt-3">
    <Button size="small">小型按钮</Button>
    <Button size="normal">默认按钮</Button>
    <Button size="big">大型按钮</Button>
  </div>
  <div class="pt-3">
    <Button level="main">主要按钮</Button>
    <Button level="normal">默认按钮</Button>
    <Button level="danger">警告按钮</Button>
  </div>
  <div class="pt-3">
    <Button loading>加载按钮</Button>
  </div>
  <div class="pt-3">
    <Button disabled>禁用按钮</Button>
  </div>
</template>
<script setup>
import Button from "./button.vue";
</script>
<style scoped></style>
