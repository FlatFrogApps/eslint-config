module.exports = {
  "extends": "./node.js",
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "plugins": [
    "import", "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolve": {
      "moduleDirectory": ["node_modules", "src"]
    }
  },
  "globals": {
    "__DEVELOPMENT__": true,
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DISABLE_SSR__": true,
    "__DEVTOOLS__": true,
    "socket": true,
    "webpackIsomorphicTools": true
  }
};
