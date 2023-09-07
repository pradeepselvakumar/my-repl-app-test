module.exports = {
  files: [
    './build/src/**/*.js'
  ],
  "from": /([import|export]) (.*) from ['"](\.(.*?))(?:\.js)?['"];/g,
  "to": "$1 $2 from '$3.js';"
};