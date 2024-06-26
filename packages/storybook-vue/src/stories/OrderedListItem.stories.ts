import type { Meta, StoryObj } from '@storybook/vue3';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-vue';
import readme from '@utrecht/ordered-list-css/README.md?raw';
import tokens from '@utrecht/ordered-list-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-ordered-list--item',
  title: 'Vue.js Component/Ordered List/Item',
  component: OrderedListItem,
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
    components: { OrderedList, OrderedListItem },
    template: `<OrderedList><OrderedListItem v-bind="$props"><slot></slot></OrderedListItem></OrderedList>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-ordered-list--item',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof OrderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Ordered List',
  component: OrderedListItem,
  args: {
    slot: 'List item 1',
  },
});
