const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@home': path.resolve(__dirname, 'src/home'),
            '@details': path.resolve(__dirname, 'src/details'),
            '@page_not_found': path.resolve(__dirname, 'src/page_not_found'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    };

    return config;
};
