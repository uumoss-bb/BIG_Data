import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {files: [ '**/*.{js,mjs,cjs,ts}' ]},
  {
    name: 'globals',
    languageOptions: { globals: {
        ...globals.jest,
        ...globals.commonjs,
        ...globals.node,
        ...globals.browser
      }
    }
  },
  {
    name: 'custom',
    rules: {}
  }
];
