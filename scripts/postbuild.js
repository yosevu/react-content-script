const fs = require('fs');
const manifest = require('../public/manifest.json');

/**
 * readFile uses a Regex to filter, match, and return the static file based on
 * the `prefix` and `extension` in the directory based on the `path`.
 *
 * @param {string} path File path relative to the build directory - `'static/js'`
 * @param {string} prefix File prefix for the file name - `'main'`
 * @param {string} extension File extension - 'js'
 * @returns {string} File name - `'main.66848e72.js'`
 */
function readFile(path, prefix, extension) {
  const file = new RegExp(`^${prefix}\.[a-z0-9]+\.${extension}$`)
  return fs.readdirSync(`./dist/${path}`)
           .filter(filename => file.test(filename))
           .map(filename => `${path}/${filename}`)[0];
}

const js = readFile('static/js', 'main', 'js');
const css = readFile('static/css', 'main', 'css');
const logo = readFile('static/media', 'logo', 'svg');

const newManifest = {
  ...manifest,
  content_scripts: [
    {
      ...manifest.content_scripts[0],
      js: [js],
      css: [css],
    }
  ],
  web_accessible_resources: [
    {
      ...manifest.web_accessible_resources[0],
      resources: [css, logo]

    }
  ]
};

function updateManifest(app) {
  // if popup, update, popup script
  // if content-script, update content-script
}

function writeManifest(app) {
  fs.writeFileSync('./dist/manifest.json', JSON.stringify(updateManifest(app), null, 2))
}

((app) => ({[app]: writeManifest(app)}[app]))(process.env.App);
