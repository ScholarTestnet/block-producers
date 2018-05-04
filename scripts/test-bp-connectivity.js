const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const axios = require('axios').default;

glob.sync(path.join(__dirname, '..', 'block-producers', '*.yml')).forEach(async filepath => {
  const config = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  const url = `https://${config.domain}:${config.http}/v1/chain/get_info`
  const response = await axios.get(url, {timeout: 2000}).catch(() => console.log('fail', url))
  console.log('pass', url)
})
