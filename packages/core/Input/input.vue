<template>
  <input type="text" v-model="inputVal" />
</template>
<script lang="ts">
import { ref } from "vue-demi";
export default {
  name: "input",
  props: {},
  setup() {
    const inputVal = ref<string>("");
    return { inputVal };
  },
};
</script>
