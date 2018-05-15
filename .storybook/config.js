import { configure } from '@storybook/react';

function loadStories() {
  let req;
  req = require.context('../src/components', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
