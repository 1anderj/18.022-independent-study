export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", {
    title: "Jude's Independent Study",
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
