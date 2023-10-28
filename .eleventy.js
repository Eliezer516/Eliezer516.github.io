const format = require("date-fns/format")
const esLocale = require("date-fns/locale/es")
const metagen = require('eleventy-plugin-metagen')
const markdownLibrary = require("./libs/headerAnchors.js")
const icons = require("./libs/icons.js")
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


const PrettyError = require("pretty-error").start()

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addWatchTarget("./src/assets/js");
  
  eleventyConfig.addPassthroughCopy('./src/assets/icons');
  eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/img');

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPlugin(metagen)
  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: {
      class: ({ language }) => `group/code animate-fade rounded-lg bg-slate-900/80 language-${language || 'plain'}`,
    }
  })
  eleventyConfig.addPlugin(emojiReadTime, {
    label: "Minutos de lectura"
  })
  
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: false
  })

  eleventyConfig.addFilter("readableDate", dateObj => {
    const fecha = new Date(dateObj)
    const fechaFormateada = format(fecha, 'MMMM dd, yyyy', { locale: esLocale })
    const fechaLegible = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.substring(1)
    return fechaLegible
  });

  eleventyConfig.addFilter("formatUrl", url => {
    return url.replace(/\//g, "%2F").replace(/:/g, "%3A")
  })

  eleventyConfig.addShortcode("icon", function(icon) {
    return icons(icon)
  })
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
