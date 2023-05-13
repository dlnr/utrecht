import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, Strong } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Strong',
  id: 'react-strong',
  component: Strong,
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
  args: {
    children: 'Hello, World!',
  },
  parameters: {
    tokensPrefix: 'utrecht-emphasis',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Strong>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);