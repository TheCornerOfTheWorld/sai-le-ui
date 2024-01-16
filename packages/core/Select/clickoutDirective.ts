import { type Directive, type DirectiveBinding } from "vue-demi";

let onClickDocument = (e: MouseEvent) => {
  let { target } = e;
  callbacks.forEach((item) => {
    if (target === item.el || item.el.contains(target)) {
      return;
    } else {
      item.callback();
    }
  });
};
document.addEventListener("click", onClickDocument);
let callbacks: { el: any; callback: DirectiveBinding & Function }[] = [];
export default {
  bind: function (el, binding, vnode) {
    callbacks.push({ el, callback: binding.value });
  },
} as Directive;

let removeListener = () => {
  document.removeEventListener("click", onClickDocument);
};

export { removeListener };
