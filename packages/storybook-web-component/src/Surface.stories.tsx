/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { utrechtSurfaceBackgroundColor } from '@utrecht/design-tokens/dist/index.mjs';
import readme from '@utrecht/surface-css/README.md?raw';
import themeColorDocs from '@utrecht/surface-css/_surface-theme-color.md?raw';
import tokensDefinition from '@utrecht/surface-css/src/tokens.json';
import { UtrechtSurface } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const MetaThemeColor = ({ color }) => <meta name="theme-color" content={color} />;

const meta = {
  title: 'Web Component/Surface',
  id: 'web-component-surface',
  component: UtrechtSurface,
  argTypes: {
    children: {
      description: 'Content of the surface',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-surface',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtSurface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const ThemeColor: Story = {
  args: {},
  name: 'Theme color',
  render: () => MetaThemeColor({ color: utrechtSurfaceBackgroundColor }),
  parameters: {
    docs: {
      description: {
        story: themeColorDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
