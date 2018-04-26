const url = require('url')

/**
 * Refactor Social media accounts to Fully qualified domains
 *
 * @param {*} config Config
 */
module.exports.refactorSocial = function refactorSocial(config) {
  // Twitter
  if (config.social_twitter && !url.parse(config.social_twitter).protocol) {
    config.social_twitter = `https://twitter.com/${config.social_twitter}`
  }
  // Telegram
  if (config.social_telegram && !url.parse(config.social_telegram).protocol) {
    config.social_telegram = `https://t.me/${config.social_telegram}`
  }
  // Facebook
  if (config.social_facebook && !url.parse(config.social_facebook).protocol) {
    config.social_facebook = `https://facebook.com/${config.social_facebook}`
  }
  // GitHub
  if (config.social_github && !url.parse(config.social_github).protocol) {
    config.social_github = `https://facebook.com/${config.social_github}`
  }
  // YouTube
  if (config.social_youtube && !url.parse(config.social_youtube).protocol) {
    config.social_youtube = `https://www.youtube.com/channel/${config.social_youtube}`
  }
  // Keybase
  if (config.social_keybase && !url.parse(config.social_keybase).protocol) {
    config.social_keybase = `https://keybase.io/${config.social_keybase}`
  }
}