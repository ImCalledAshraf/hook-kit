const path = require('path');

module.exports = {
  stories: ['../stories/*.story.mdx', '../stories/*.story.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-options/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
  ],
  // staticDirs: ['../stories/public'],

  framework: '@storybook/react',
  //   core: {
  //     disableTelemetry: true,
  //   },
  features: {
    interactionsDebugger: true,
  },
};
