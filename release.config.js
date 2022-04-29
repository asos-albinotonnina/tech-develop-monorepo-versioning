module.exports = {
  branches: [
    { name: "1.x", range: "1.x", channel: "1.x" }, // Only after the `1.x` is created in the repo
    { name: "2.x", range: "2.x", channel: "2.x" }, // Only after the `2.x` is created in the repo
    { name: "main" },
    { name: "next", channel: "next" }, // Only after the `next` is created in the repo
    { name: "pre/rc", channel: "pre/rc", prerelease: "rc" }, // `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
    { name: "beta", channel: "beta", prerelease: true }, // `prerelease` is set to `beta` as it is the value of `name`
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "eslint",
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    // "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    // "@semantic-release/npm",
    // [
    //   "@semantic-release/github",
    //   {
    //     assets: ["dist/**"],
    //   },
    // ],
  ],
  dryRun: true,
  debug: true,
  ci: false, // Set to false to skip Continuous Integration environment verifications. This allows for making releases from a local machine.
};
