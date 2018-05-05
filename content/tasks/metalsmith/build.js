var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');

var marked = require('marked');
var prism = require('prismjs');

var searchable = require('./plugins/add-search');
var taxonomy = require('./plugins/taxonomy');
var print = require('./plugins/metadata-to-json');


var renderer = new marked.Renderer();

// Change the code method to output the same as Prism.js would.
renderer.code = function(code, lang, escaped) {
  code = this.options.highlight(code, lang);

  if (!lang) {
    return '<pre><code>' + code + '</code></pre>';
  }

  // e.g. "language-js"
  var langClass = this.options.langPrefix + lang;

  return '<pre class="line-numbers ' + langClass + '"><code class="' + langClass + '" >' +
    code +
    '</code></pre>';
};


// Translate marked languages to prism.
var extensions = {
    js: 'javascript',
    ts: 'typescript',
    json: 'json',
    bash: 'bash',
    git: 'git',
    scss: 'scss',
    sass: 'sass',
    html: 'markup',
    svg: 'markup',
    xml: 'markup',
  };

var markdownOptions = {
    smartypants: true,
    renderer: renderer,
    langPrefix: 'language-',
    highlight: function(code, lang) {
      if (!prism.languages.hasOwnProperty(lang)) {
        // Default to markup if it's not in our extensions.
        lang = extensions[lang] || 'markup';
      }

      return prism.highlight(code, prism.languages[lang]);
    },
    
  };

Metalsmith(__dirname+'/../../')
    .source('src')
    .destination('build')
    .use(searchable({
      ref: 'title',
      indexPath: 'lunr.json',
      fields: {
        contents: 1,
        title: 5,
        tags: 10
      },
    }))
    .use(markdown(markdownOptions))
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        directory: './templates'
    }))
    .use(taxonomy([
      {
        name: 'Home',
        pattern: '*.html'
      },
      {
        name: 'Components',
        permalink: '',
        pattern: 'components/*',
        subcategories: [
          {
            name: 'Expand Collapse',
            permalink: '',
            pattern: 'components/expand-collapse/*',
          },
          {
            name: 'Radio Buttons',
            permalink: '',
            pattern: 'components/radio-button/*',
          },
          {
            name: 'Buttons',
            permalink: '',
            pattern: 'components/buttons/*',
          }
        ]
      },
      {
        name: 'Styles',
        permalink: '',
        pattern: 'styles/**',
      },
      {
        name: 'Resources',
        permalink: '',
        pattern: 'resources/**',
        subcategories: []
      },
      {
        name: 'All',
        pattern: '**/**'
      }
    ]))
    .use(print({
      output: 'build/manifest.json'
    }))
    .build(function (err) {
        // For error handling
        if (err) {
            throw err;
        }
    });

    