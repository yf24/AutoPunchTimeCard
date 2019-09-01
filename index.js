const nightwatch = require('nightwatch');
const path = require('path')
nightwatch.cli(function(argv) {
    argv.config = path.join(__dirname, './nightwatch.conf.js');;
    const runner = nightwatch.CliRunner(argv);
    runner
    .setup()
    .startWebDriver()
    .then( ()=> runner.runTests())
    .then( ()=> runner.stopWebDriver())
    .catch(err => console.error(err));
});