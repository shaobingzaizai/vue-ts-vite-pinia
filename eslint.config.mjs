import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "vue/multi-word-component-names": "off", // 关闭命名不规范警告
      "@typescript-eslint/no-explicit-any": ["off"], // 关闭any类型的警告。
      "vue/script-indent": [
        "error",
        4,
        {
          baseIndent: 1,
          switchCase: 0,
          ignore: [],
        },
      ],
      // 最大属性每行
      "vue/max-attributes-per-line": [
        2,
        {
          singleline: 3, // 一行是最大属性数
          multiline: {
            max: 1, // 多行是最大属性数
            allowFirstLine: false, // 是否允许属性和标签在同一行
          },
        },
      ],
      // 多行元素的内容前后换行
      "vue/multiline-html-element-content-newline": 0,
    },
  },
];
