import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
  config.module?.rules?.push({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  });

  config.module?.rules?.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  return config;
},

};

export default config;
