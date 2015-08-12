module.exports = {
  postStyleLoaders: [
    require.resolve('extract-text-webpack-plugin/loader.js') + '?{"omit":1,"extract":true,"remove":true}'
  ],
  scripts: {
    // add every bootstrap script you need 
    'transition': true
  },
  styles: {
    // add every bootstrap style you need 
    "mixins": true,
 
    "normalize": true,
    "print": true,
 
    "scaffolding": true,
    "type": true,
  }
};