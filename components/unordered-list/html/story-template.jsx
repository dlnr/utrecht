/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'List items',
    control: 'text',
  },
};

export const decorators = [(story) => <section class="utrecht-html">{story()}</section>];

export const defaultArgs = {
  innerHTML: `<li>Lorem</li><li>Ipsum</li><li>Dolor</li>`,
};

export const UnorderedList = ({ innerHTML = defaultArgs.innerHTML }) => <ul>{parser(innerHTML)}</ul>;