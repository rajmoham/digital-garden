import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Digital Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "rajmoham.github.io/digital-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Fascinate", // Pacifico, Limelight, 
        header: "Limelight", // Story Script
        body: "IBM Plex Mono",
        code: "IBM Plex Mono",
      },
      // Everforest Medium theme (https://github.com/sinnhe/everforest)
      colors: {
        lightMode: {
          light: "#efebd4",
          lightgray: "#708089",
          gray: "#8da101",
          darkgray: "#5c6a72",
          dark: "#8da101",
          secondary: "#8da101",
          tertiary: "#425047",
          highlight: "#eaedc8",
          textHighlight: "#bdc3af",
        },
        darkMode: {
          light: "#232a2e",
          lightgray: "#d3c6aa",
          gray: "#a7c080",
          darkgray: "#d3c6aa",
          dark: "#a7c080",
          secondary: "#a7c080",
          tertiary: "#425047",
          highlight: "#543a48", // bg_visual
          textHighlight: "#56635f", // bg5
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git", "filesystem"],
      }),
      Plugin.HardLineBreaks(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "material-theme-palenight",
          dark: "material-theme-palenight",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      // Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      // Plugin.ContentIndex({
      //   enableSiteMap: true,
      //   enableRSS: true,
      // }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
