module.exports = function (eleventyConfig) {
  // public klasörünü olduğu gibi geçir (_site içine)
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "content",   // içerikler buradan alınacak
      output: "_site",    // derlenmiş site buraya çıkacak
      includes: "../includes", // HTML şablonlar için (istersen)
      layouts: "../layouts"    // layout dosyaları için (opsiyonel)
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
