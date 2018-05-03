---
lunr: true
title: Story time
layout: main.hbs
---
# Heading with id
*Once* upon a time there was a list of names:
- Ada **Lovelace**
- Charles **Babbage**

```js
var mdOptions = {
  gfm: true,
  smartypants: true,
  renderer: renderer,
  langPrefix: 'language-',
  highlight: function (code, lang) {
    if (!prism.languages.hasOwnProperty(lang)) {
      // Default to markup.
      lang = extensions[lang] || 'markup';
    }

    return prism.highlight(code, prism.languages[lang]);
  },
};

```