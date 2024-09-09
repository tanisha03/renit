const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const reactNativeConfig = require('./react-native.config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
