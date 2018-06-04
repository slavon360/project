import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('UI Toolkit', module)
  .add('Button', () => (
    <Button>test</Button>
  ));
