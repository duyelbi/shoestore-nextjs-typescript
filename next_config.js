const withImages = require('next-images');
const withSass = require('@reit/next-sass');

module.exports = withImages(
    withSass()
);