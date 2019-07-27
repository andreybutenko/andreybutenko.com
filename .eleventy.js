const isProduction = process.env.NODE_ENV === 'production';

const filters = require('./_eleventy/filters.js')
const shortcodes = require('./_eleventy/shortcodes.js')

module.exports = function(config) {
  Object.keys(filters).forEach(filterName => {
    config.addFilter(filterName, filters[filterName]);
  })

  Object.keys(shortcodes).forEach(shortCodeName => {
      config.addShortcode(shortCodeName, shortcodes[shortCodeName]);
  });

  config.addLayoutAlias('base', 'base.njk');
  config.addLayoutAlias('project', 'project.njk');

  // config.addPassthroughCopy('src/robots.txt');

  config.addCollection('projects', collection => {
    return collection
      .getAllSorted()
      .filter(item => item.inputPath.match(/\/projects\//) !== null)
      .reverse();
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};
