module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended', // Prettier 통합
  ],
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 오류로 설정
  },
};
