const path = require('path'); // This is an example of Common JS importing

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For the SASS pre-processing,
  sassOptions: {
    // look under the ~/styles folder of this project's location
    includePaths: [path.join(__dirname, 'styles')]
    //                       \_______/
    //                      global node variable
  }
}

module.exports = nextConfig
