# andreybutenko.com

Andrey's new portfolio site.

## Setup

```
# Install npm packages
npm install

# Set up assets
npx gulp setup
```

## Running

```
# Start hot-reloading web server
npx @11ty/eleventy --serve

# gulp task: watch and reload sass and assets
npx gulp sassAndAssets:watch

# gulp task: compile sass
npx gulp sass
npx gulp sass:watch

# gulp task: copy project assets
npx gulp copyProjectAssets
npx gulp copyProjectAssets:watch

# gulp task: copy work assets
npx gulp copyWorkAssets
npx gulp copyWorkAssets:watch

# gulp task: copy favicon assets
npx gulp copyFaviconAssets
```
