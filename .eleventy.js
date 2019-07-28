const fs = require('fs');
const PROJECT_ORDER = JSON.parse(fs.readFileSync('src/_data/projectOrder.json', 'utf8'));

const isProduction = process.env.NODE_ENV === 'production';

const filters = require('./_eleventy/filters.js');
const shortcodes = require('./_eleventy/shortcodes.js');

module.exports = function(config) {
  Object.keys(filters).forEach(filterName => {
    config.addFilter(filterName, filters[filterName]);
  })

  Object.keys(shortcodes).forEach(shortCodeName => {
      config.addShortcode(shortCodeName, shortcodes[shortCodeName]);
  });

  config.addLayoutAlias('base', 'layouts/base.njk');
  config.addLayoutAlias('home', 'layouts/home.njk');
  config.addLayoutAlias('project', 'layouts/project.njk');

  config.addPassthroughCopy('src/assets');
  // config.addPassthroughCopy('src/robots.txt');

  config.addCollection('projects', collection => {
    const projects = collection
      .getAllSorted()
      .filter(item => item.inputPath.match(/\/projects\//) !== null)
      .reverse();

    return PROJECT_ORDER.map(directoryName => projects.filter(project => project.data.directory == directoryName)[0]);
  });

  onfig.addCollection('allProjects', collection => {
    return collection
      .getAllSorted()
      .filter(item => item.inputPath.match(/\/projects\//) !== null)
      .reverse();
  });

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
