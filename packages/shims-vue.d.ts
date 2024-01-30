declare module "*.vue" {
  import type { DefineComponent, Plugin } from "vue-demi";

  const component: DefineComponent<{}, {}, any> & Plugin;
  export default component;
}
