module.exports = function(api){
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.json',
            '.type.ts',
            '.navigation.ts',
            '.nav.type.ts',
            '.model.ts',
          ],
          alias: {
            '@apis': './src/apis',
            '@assets': './src/assets',
            '@components': './src/components',
            '@containers': './src/containers',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@navigators': './src/navigators',
            '@realms': './src/realms',
            '@stores': './src/stores',
            '@themes': './src/themes',
            '@types': './src/types',
            '@utils': './src/utils',
            '@translation': './src/translation',
          }
        }
      ],
      ['react-native-reanimated/plugin'],
      ['react-native-worklets-core/plugin']
    ]
  }
}