const backspace = require('backspace-x')
const apiUrl = process.env.API_URL

module.exports = backspace({
  trailingSlash: true,
  env: {
    apiUrl
  }
})
