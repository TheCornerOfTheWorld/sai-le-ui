<template>
  <div>{{ inputVal }}</div>
  <div v-clickoutDirective>
    <div @click="setVal('123')">123</div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue-demi";
import clickoutDirective from "./clickoutDirective";

export default defineComponent({
  name: "select",
  props: {},
  directives: { clickoutDirective },
  setup() {
    const inputVal = ref<string>("");
    function setVal(val: string) {
      inputVal.value = val;
    }

    return { inputVal, setVal };
  },
});
</script>
