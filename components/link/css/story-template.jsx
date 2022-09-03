/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  active: {
    description: 'Active',
    control: 'boolean',
  },
  boxContent: {
    description: 'Content is a box, such as an image or a section, not just text',
    control: 'boolean',
  },
  external: {
    description: 'External',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  href: {
    description: 'Target URL',
    type: {
      name: 'string',
      required: true,
    },
  },
  telephone: {
    description: 'Link to telephone number',
    control: 'boolean',
  },
  textContent: {
    description: 'Link text',
    type: {
      name: 'string',
      required: true,
    },
  },
  visited: {
    description: 'Visited',
    control: 'boolean',
  },
};

export const defaultArgs = {
  active: false,
  boxContents: false,
  current: false,
  external: false,
  hrefLang: '',
  hover: false,
  lang: '',
  focus: false,
  focusVisible: false,
  href: null,
  telephone: false,
  textContent: '',
  title: '',
  visited: false,
  iconleft: false,
};

export const exampleArgs = {
  textContent: 'Voorbeeldlink',
};

export const Link = ({
  active = defaultArgs.active,
  boxContent = defaultArgs.boxContent,
  current = defaultArgs.current,
  external = defaultArgs.external,
  hrefLang = defaultArgs.hrefLang,
  hover = defaultArgs.hover,
  lang = defaultArgs.lang,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  href = defaultArgs.href,
  telephone = defaultArgs.telephone,
  textContent = defaultArgs.textContent,
  title = defaultArgs.title,
  visited = defaultArgs.visited,
  iconleft = defaultArgs.iconleft,
}) => (
  <a
    href={href === null ? `https://example.com/${lang}` : href}
    className={clsx('utrecht-link', {
      'utrecht-link--active': active,
      'utrecht-link--alternate-lang': lang && !current,
      'utrecht-link--box-content': boxContent,
      'utrecht-link--current-lang': lang && current,
      'utrecht-link--external': external,
      'utrecht-link--focus': focus,
      'utrecht-link--focus-visible': focusVisible,
      'utrecht-link--hover': hover,
      'utrecht-link--telephone': telephone,
      'utrecht-link--visited': visited,
      'utrecht-link--icon-left': iconleft,
    })}
    rel={external ? 'external noopener noreferrer' : null}
    aria-current={current ? 'page' : null}
    title={title || null}
    hrefLang={hrefLang || null}
    lang={lang || null}
  >
    {textContent}
  </a>
);

export default Link;