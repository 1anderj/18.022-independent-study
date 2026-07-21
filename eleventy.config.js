export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", {
    title: "Jude Anders",
  });

  eleventyConfig.addGlobalData("buildTime", () => Date.now());

  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
}
