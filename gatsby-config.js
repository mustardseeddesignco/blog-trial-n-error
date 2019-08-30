module.exports = {
  siteMetadata: {
    title: `MSDC`,
    description: `A simple starter blog with image and SEO`,
    keywords: ["BrioDev", "Gatsby Blog", "Gatsby Theme"],
    siteUrl: "https://brio.dev",
    twitter: {
      site: "@briodev",
      creator: "@briodev", //This can be overwritten in SEO by the author frontmatter
    },
    author: `BrioDev - https://brio.dev`,
  },

  plugins: [

    `gatsby-plugin-mdx`,

    {
      resolve: "@briodev/gatsby-theme-blog",
      options: {
        contentPath: "src/content/blog-posts",
        basePath: "/blog",
        tagsPath: "/categories",
        homePath: "/",
        aboutPath: "/about",
        projectsPath: "/projects",
        contactPath: "/contact",
      },
    },
  ],
}
