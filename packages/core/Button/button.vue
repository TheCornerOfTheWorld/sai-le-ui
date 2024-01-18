<template>
  <button class="saile-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="saile-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { computed, toRefs } from "vue-demi";
type ButtonProps = {
  theme?: "button" | "text" | "link";
  size?: "normal" | "big" | "small";
  level?: "normal" | "main" | "danger";
  disabled?: boolean;
  loading?: boolean;
};
const props = withDefaults(defineProps<ButtonProps>(), {
  theme: "button",
  size: "normal",
  level: "normal",
  disabled: false,
  loading: false,
});

const { theme, size, level } = toRefs(props);
const classes = computed(() => {
  return {
    [`saile-theme-${theme.value}`]: theme.value,
    [`saile-size-${size.value}`]: size.value,
    [`saile-level-${level.value}`]: level.value,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.saile-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.saile-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.saile-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.saile-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.saile-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.saile-theme-button {
    &.saile-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.saile-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.saile-theme-link {
    &.saile-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.saile-theme-text {
    &.saile-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.saile-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.saile-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.saile-theme-link,
  &.saile-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .saile-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: saile-spin 1s infinite linear;
  }
}
@keyframes saile-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
