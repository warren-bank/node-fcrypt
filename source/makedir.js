var path = require("path");
var fs = require("fs");

// copied from:
//   https://github.com/developersworkspace/DirVault/blob/b9cf877a53576307301c293924baa999e9a89359/src/app.js#L94
// MIT license:
//   https://github.com/developersworkspace/DirVault/blob/b9cf877a53576307301c293924baa999e9a89359/LICENSE

function createDirectory(dirpath) {
    let parts = dirpath.split(path.sep);
    for (let i = 1; i <= parts.length; i++) {
        mkdirSync(path.join.apply(null, parts.slice(0, i)));
    }
}

function mkdirSync(path) {
    try {
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
}

module.exports = createDirectory;
