module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "mocha": true
  },
  "rules": {
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/no-extraneous-dependencies": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "id-length": 0,
    "comma-dangle": 0,  // not sure why airbnb turned this on. gross!
    "func-names": 0,
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-console": 0,
    "no-alert": 0,
    "no-param-reassign": 0,
    "prefer-template": 1,
    "space-before-function-paren": 0
  },
  "plugins": [
    "import"
  ],
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
