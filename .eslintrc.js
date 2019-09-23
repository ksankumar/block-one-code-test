module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  'globals': {
    "fetch": true
  },
  rules: {
    'no-tabs': 0,
    'indent': 'off',
    'no-useless-escape': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
