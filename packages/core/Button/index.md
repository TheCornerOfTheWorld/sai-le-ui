# Button

## Usage

```html
<script setup>
  import { Button } from "Saile-Ui";
</script>
<template>
  <div class="pt-3">
    <button theme="button">默认按钮</button>
    <button theme="text">文字按钮</button>
    <button theme="link">链接按钮</button>
  </div>
  <div class="pt-3">
    <button size="small">小型按钮</button>
    <button size="normal">默认按钮</button>
    <button size="big">大型按钮</button>
  </div>
  <div class="pt-3">
    <button level="main">主要按钮</button>
    <button level="normal">默认按钮</button>
    <button level="danger">警告按钮</button>
  </div>
  <div class="pt-3">
    <button loading>加载按钮</button>
  </div>
  <div class="pt-3">
    <button disabled>禁用按钮</button>
  </div>
</template>
```
