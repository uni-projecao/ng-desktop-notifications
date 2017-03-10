{
  "name": "ng-desktop-notifications",
  "version": "0.0.7",
  "description": "Display desktop notifications to the user.",
  "main": "./src/ng-desktop-notifications.js",
  "scripts": {
    "dev": "rollup -c --watch",
    "build": "rollup -c",
    "prepublish": "npm run build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "notification",
    "angular",
    "desktop"
  ],
  "author": "Antério Vieira <anteriovieira@gmail.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/uni-projecao/ng-desktop-notifications.git"
  },
  "dependencies": {
    "angular": "1.6.3"
  },
  "devDependencies": {
    "babel-preset-es2015-rollup": "^3.0.0",
    "rollup": "^0.41.4",
    "rollup-plugin-babel": "^2.7.1",
    "rollup-plugin-uglify": "^1.0.1",
    "rollup-watch": "^3.2.2"
  }
}
