import "@vue/runtime-core";

// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // ElTourStep: typeof import('element-plus')['ElTourStep']
    SlInput: typeof import("./Input/input.vue")["default"];
  }

  interface ComponentCustomProperties {
    // $message: typeof import('element-plus')['ElMessage']
  }
}

export {};
