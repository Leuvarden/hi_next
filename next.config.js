//all webpack plugins and stuff

const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withSass());

/* Without CSS Modules, with PostCSS */
// module.exports = )