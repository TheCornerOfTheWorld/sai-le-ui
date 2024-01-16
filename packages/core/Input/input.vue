<template>
  <input type="text" v-model="inputVal" />
</template>
<script setup lang="ts">
import { ref } from "vue-demi";
const inputVal = ref<string>("");
</script>
