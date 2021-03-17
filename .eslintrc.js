module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    "template-curly-spacing": ["error"],																	// `${ abc}` 금지
    "computed-property-spacing": ["error", "never"],											// 객체속성 쓸모없는 공백 제거
    "block-spacing": ["error"],																						// 블록범위 패딩
    "comma-spacing": ["error", { "before": false, "after": true }],				// {a,b,c} x {a, b, c} O
    "key-spacing": ["error"],																							// { a:1, b:2 } x { a: 1, b: 2 } O
    "keyword-spacing": ["error"],																					// if() x if ()
    "object-curly-spacing": ["error", "always"],													// {a: 1 } x { a: 1 } o
    "switch-colon-spacing": ["error"],																		// case: 
    "arrow-spacing": ["error"],																						// => {}
    "semi-spacing": ["error", { "before": false, "after": true }],				// const a ; const a;	// aaerogiajerg

    "quotes": ["error", "single", { "avoidEscape": true }],
    "quote-props": ["error", "consistent-as-needed"],
    "semi": ["error", "always"],
  },
};
