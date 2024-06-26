import type { Meta, StoryObj } from '@storybook/vue3';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-vue';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokens from '@utrecht/unordered-list-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-unordered-list--item',
  title: 'Vue.js Component/Unordered List/Item',
  component: UnorderedListItem,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      name: 'slot',
      control: { type: 'text' },
      type: { required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { UnorderedList, UnorderedListItem },
    template: `<UnorderedList><UnorderedListItem v-bind="$props"><slot></slot></UnorderedListItem></UnorderedList>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-unordered-list--item',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Unordered List',
  component: UnorderedList,
  components: { UnorderedListItem },
  args: {
    slot: 'List item 1',
  },
});
