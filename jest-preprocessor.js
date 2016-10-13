const babelJest = require('babel-jest');

module.exports = {
    process(src, filename) {
        if (/\.(css)$/.test(filename)) {
            return;
        }

        return babelJest.process(src, filename);
    }
};
