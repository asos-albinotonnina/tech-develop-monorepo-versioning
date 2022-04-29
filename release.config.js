module.exports = {
  branches: [
    { name: "main" },
    { name: "beta", channel: "beta", prerelease: true }, // `prerelease` is set to `beta` as it is the value of `name`
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "eslint",
        releaseRules: [
          { tag: "Docs", message: "*README*", release: "patch" },
          { tag: "New", release: "patch" },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["docs/CHANGELOG.md"],
      },
    ],
    "@semantic-release/git",
    // "@semantic-release/npm",
    // [
    //   "@semantic-release/github",
    //   {
    //     assets: ["dist/**"],
    //   },
    // ],
  ],
  dryRun: false,
  debug: true,
  ci: false, // Set to false to skip Continuous Integration environment verifications. This allows for making releases from a local machine.
};
