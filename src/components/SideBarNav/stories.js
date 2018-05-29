import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SideBarNav from './';

const nav = { title: 'First title', checked: false, content: <div>First title content</div> };

const navigationItemChecked = [
  {...nav},
  {...nav, content: <div>Second Title content</div>, title: 'Second title'},
  {...nav, content: <div>Third Title content</div>, title: 'Third title', checked: true },
];

const navigationItemsUnchecked = [
  {...nav},
  {...nav, content: <div>Second Title content</div>, title: 'Second title'},
  {...nav, content: <div>Third Title content</div>, title: 'Third title'},
];

const events = {
  checkItem: action('checkItem')
};
const classes = {
  navClass: 'FAQNavBtn'
};

storiesOf('SideBarNav', module)
  .add('unchecked', () => <SideBarNav items={navigationItemsUnchecked} {...events} {...classes} />)
  .add('checked', () => <SideBarNav items={navigationItemChecked} {...events} {...classes} />);
