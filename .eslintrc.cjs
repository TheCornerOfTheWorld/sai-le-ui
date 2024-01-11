module.exports = {
  // ESLint 一旦发现配置文件中有 'root': true，它就会停止在父级目录中寻找。
  root: true,
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
  env: {
    node: true,
    // 修复undefined defineProps
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  // 启用的规则
  extends: [
    'eslint-config-prettier',
    'eslint:recommended', // 使用推荐的eslint
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'plugin:@typescript-eslint/recommended',
    // 1.继承.prettierrc.js文件规则
    // 2.开启rules的 'prettier/prettier': 'error'
    // 3.eslint fix的同时执行prettier格式化
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    // js的版本
    ecmaVersion: 2020,
    // 解析器
    parser: '@typescript-eslint/parser',
    // 模块化方案
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // vue官方默认 变量声明未使用
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
    // 关闭驼峰检查
    'vue/multi-word-component-names': 'off'
    // 添加组件命名忽略规则 vue官方默认规则是多单词驼峰来进行组件命名
    // 'vue/multi-word-component-names': [
    //   'warn',
    //   {
    //     ignores: ['index'], //需要忽略的组件名
    //   },
    // ]
    // @ts-check 添加这个关闭检查
    // '@typescript-eslint/no-explicit-any': 'off', // 允许ts使用any
    // '@typescript-eslint/no-var-requires': 'off', // 强制使用 import 且不允许使用 require 设置off关闭检查
    // 'vue/require-v-for-key': 'off', // 对保留元素检查 vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写
    // 'vue/valid-v-for': 'off', // 对于非保留(自定义)元素检查vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
