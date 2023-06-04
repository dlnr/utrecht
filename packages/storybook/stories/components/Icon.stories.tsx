/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/icon/README.md?raw';
import tokensDefinition from '@utrecht/components/icon/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { PropsWithChildren } from 'react';
// import { Icon } from '@utrecht/component-library-react/src/Icon';
import { designTokenStory } from './util';
import '@utrecht/components/icon/css/index.scss';

export const Icon = ({ children }: PropsWithChildren) => <span className="utrecht-icon">{children}</span>;

const meta = {
  title: 'CSS Component/Icon',
  id: 'css-icon',
  component: Icon,
  argTypes: {
    children: {
      description: 'HTML content',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-icon',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

/* The icon should be 16px, regardless of the width="512px". The icon must not be stretched. */
export const SizeCSSVariable: Story = {
  decorators: [(Story) => <div style={{ '--utrecht-icon-size': '16px' }}>{Story()}</div>],
  args: {
    children: (
      <svg viewBox="0 0 32 32" width="512px">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

/* The icon should be red, using the `--utrecht-icon-color` custom property */
export const ColorCSSVariable: Story = {
  decorators: [(Story) => <div style={{ '--utrecht-icon-color': 'red' }}>{Story()}</div>],
  args: {
    children: (
      <svg viewBox="0 0 32 32" width="512px">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

/* The icon should be red, when the parent element is red */
export const ParentColor: Story = {
  decorators: [(Story) => <div style={{ color: 'red' }}>{Story()}</div>],
  args: {
    children: (
      <svg viewBox="0 0 32 32">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

export const SVGWidth: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32" width="512px">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

export const SVGHeight: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32" height="512px">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

export const SVGWidthHeight: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32" width="512px" height="512px">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

/* The <svg> with 1em as `width` and `height` is reasonably sized even when no CSS is available */
export const SVGWidthHeightEm: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32" width="1em" height="1em">
        <rect fill="currentColor" x="8" y="0" width="16" height="32" />
      </svg>
    ),
  },
};

export const DesignTokens: Story = designTokenStory(meta);