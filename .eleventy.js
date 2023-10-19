const format = require("date-fns/format")
const esLocale = require("date-fns/locale/es")
const metagen = require('eleventy-plugin-metagen')
const markdownLibrary = require("./libs/headerAnchors.js")
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");


const PrettyError = require("pretty-error").start()

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addWatchTarget("./src/assets/js");
  
  eleventyConfig.addPassthroughCopy('./src/assets/icons');
  eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/img');

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPlugin(metagen)
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
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};