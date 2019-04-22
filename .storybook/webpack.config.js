const path = require('path');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    return config;
};