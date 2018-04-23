const fs = require('fs');
const test = require('tape');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const url = require('url');

test('validate block-producers configs', t => {
  glob.sync(path.join(__dirname, 'block-producers', '**', '*.yml')).forEach(filepath => {
    const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
    const {name} = path.parse(filepath)
    const requiredFields = [
      'eosio_account_name',
      'eosio_initial_authority',
    ];
    testAccount(t, config.eosio_account_name, name)
    testSocial(t, config.social_twitter, name)
    testSocial(t, config.social_telegram, name)
    testSocial(t, config.social_facebook, name)
    testSocial(t, config.social_github, name)
    testSocial(t, config.social_youtube, name)
    testSocial(t, config.social_keybase, name)

    // Required Fields (Fail)
    requiredFields.forEach(field => {
      if (!config[field]) t.fail(`${name} missing ${field}`);
      else t.pass(`${name} includes ${field}`)
    })
  })
  t.end();
})

test('validate developers configs', t => {
  glob.sync(path.join(__dirname, 'developers', '*.yml')).forEach(filepath => {
    const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
    const {name} = path.parse(filepath)
    const requiredFields = [
      'eosio_account_name',
      'eosio_initial_authority',
    ];
    testAccount(t, config.account_name)

    // Required Fields (Fail)
    requiredFields.forEach(field => {
      if (!config[field]) t.fail(`${name} missing ${field}`);
      else t.pass(`${name} includes ${field}`)
    })
  })
  t.end();
})

/**
 * Test Account
 *
 * @param {*} t Test
 * @param {string} account_name Account
 */
function testAccount(t, account_name) {
  // Accont name must be no-UTF symbols
  if (account_name.split(/[.12345abcdefghijklmnopqrstuvwxyz]+/).length > 2) t.fail(`${account_name} [account_name] invalid character symbol`)

  // Account name longer then 12 characters
  if (account_name.length > 12) t.fail(`${account_name} [account_name] cannot be longer than 12 characters`)

  // Normalize Account
  if (account_name.match('_')) t.fail(`Name not properly normalized (name: ${account_name}, normalized: ${account_name.replace('_', '.')})`)
}

/**
 * Test Social Media Account
 *
 * @param {*} t Test
 * @param {string} account_name Account Name
 * @param {string} name Debug Name
 */
function testSocial(t, account_name, name) {
  if (account_name) {
    // No empty spaces
    if (account_name.match(' ')) t.fail(`${name} => ${account_name} cannot contain white spaces`)

    // Account must be fully qualified domain
    if (!url.parse(account_name).protocol) t.fail(`${name} => social account must use a fully qualified domain URL`)
  }
}
