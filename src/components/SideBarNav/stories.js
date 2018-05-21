import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SideBarNav from './';

let nav = { title: 'First title', checked: false, content: <div>First title content</div> };

let navigationItemChecked = [
  {...nav},
  {...nav, content: <div>Second Title content</div>, title: 'Second title'},
  {...nav, content: <div>Third Title content</div>, title: 'Third title', checked: true },
]

let navigationItemsUnchecked = [
  {...nav},
  {...nav, content: <div>Second Title content</div>, title: 'Second title'},
  {...nav, content: <div>Third Title content</div>, title: 'Third title'},
]

let events = {
  checkItem: action('checkItem')
}
let classes = {
  navClass: 'FAQNavBtn'
}

storiesOf('SideBarNav', module)
  .add('unchecked', () => <SideBarNav items={navigationItemsUnchecked} {...events} {...classes} />)
  .add('checked', () => <SideBarNav items={navigationItemChecked} {...events} {...classes} />);
