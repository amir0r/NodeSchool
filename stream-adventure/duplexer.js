const spawn = require('child_process').spawn
const d = require('duplexer2')

module.exports = (cmd, args) => (ps = spawn(cmd, args)) && d(ps.stdin, ps.stdout)
