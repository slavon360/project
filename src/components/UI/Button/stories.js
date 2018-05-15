import React from 'react';
import Button from './';
import { storiesOf } from '@storybook/react';

storiesOf('UI Toolkit', module)
  .add('Button', () => (
    <Button>test</Button>
  ));
