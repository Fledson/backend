import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "quotes": ["error", "double"], // Força o uso de aspas duplas
      "semi": ["error", "always"],   // Força o uso de ponto e vírgula
      "object-curly-spacing": ["warn", "always"], // Requer espaços dentro de objetos
      "eqeqeq": ["warn", "always"], // Sempre usar igualdade estrita
      "space-infix-ops": ["warn"], // Requer espaço em volta de operadores
      "no-console": ["warn"], // Emite um aviso para console.log
      "space-before-function-paren": ["warn", "never"], // Sem espaço antes dos parênteses de função
      "curly": ["warn", "all"], // Sempre usar chaves em blocos
      "no-unused-vars": ["warn"],   // Sem variáveis não usadas
    },
  },
  pluginJs.configs.recommended,
];
