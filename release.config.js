module.exports = {
  branches: ["main", "next"],
  plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator']
  // plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/npm', '@semantic-release/github']
}