module.exports = {
  branches: ["main", "next"],
  plugins: [
    "@semantic-release/commit-analyzer",
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
