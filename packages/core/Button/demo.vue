<script setup>
import Button from "./button.vue";
import { ref } from "vue";
const count = ref(0);
</script>
<template>
  {{ count }}
  <Button />
</template>
