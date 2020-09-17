module.exports = {
  "verbose": true,
  "globals": {
    "NODE_ENV": "test"
  },
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  setupFilesAfterEnv: ['./setUpTests.js'],
  "moduleDirectories": [
    "node_modules",
    "src",
  ]
};
