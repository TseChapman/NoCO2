module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: ['**/tests/**/*.test.js'],
  setupFiles: ['dotenv/config'],
};
