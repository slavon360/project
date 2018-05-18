import React from 'react';
import Logo from './';
import { storiesOf } from '@storybook/react';

storiesOf('UI Toolkit', module)
  .add('Logo', () => (
    <Logo />
  ));
