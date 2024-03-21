/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from '@utrecht/component-library-react';
import type { SelectProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/select/README.md?raw';
import multipleDocs from '@utrecht/components/select/_multiple.md?raw';
import tokensDefinition from '@utrecht/components/select/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { designTokenStory } from './design-token-story';
import '@utrecht/components/select/css/index.scss';

const SelectStory = ({
  focus,
  focusVisible,
  options,
  ...props
}: SelectProps & { focus?: boolean; focusVisible?: boolean; options: { value?: string; label: ReactNode }[] }) => {
  return (
    <Select
      className={clsx({
        'utrecht-select--focus': focus,
        'utrecht-select--focus-visible': focusVisible,
      })}
      {...props}
    >
      {options.map(({ value, label }) => (
        <SelectOption value={value}>{label}</SelectOption>
      ))}
    </Select>
  );
};

const meta = {
  title: 'CSS Component/Select',
  id: 'css-select',
  component: SelectStory,
  argTypes: {
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    multiple: {
      description: 'Multiple',
      control: 'boolean',
    },
    options: {
      description: 'Options',
      type: {
        name: 'array',
        required: true,
      },
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    focus: false,
    invalid: false,
    options: [
      { value: '1', label: 'Option #1' },
      { value: '2', label: 'Option #2', selected: true },
      { value: '3', label: 'Option #3' },
    ],
    multiple: false,
    required: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-select',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SelectStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Busy: Story = {
  args: {
    busy: true,
    options: [],
  },
};

export const Focus: Story = {
  args: {
    className: 'utrecht-select--focus',
  },
};

export const FocusVisible: Story = {
  args: {
    className: 'utrecht-select--focus utrecht-select--focus-visible',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: multipleDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);