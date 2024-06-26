import type { Meta, StoryObj } from '@storybook/vue3';
import { LinkSocial, ListSocial, ListSocialItem } from '@utrecht/component-library-vue';
import readme from '@utrecht/link-social-css/README.md?raw';
import tokens from '@utrecht/link-social-css/src/tokens.json';
import {
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
} from '@utrecht/web-component-library-vue';
import { createStory } from './util';

const meta = {
  id: 'vue-list-social',
  title: 'Vue.js Component/List Social',
  component: ListSocial,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      name: 'slot',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
    external: {
      name: 'external',
      control: { type: 'boolean' },
      type: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: {
      ListSocial,
      ListSocialItem,
      LinkSocial,
      UtrechtIconFacebook,
      UtrechtIconInstagram,
      UtrechtIconLinkedin,
      UtrechtIconTwitter,
      UtrechtIconWhatsapp,
    },
    template: `<ListSocial v-bind="$props"><slot></slot></ListSocial>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-list-social',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ListSocial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'ListSocial',
  args: {
    slot: `
          <ListSocialItem>
        <LinkSocial aria-title="facebook" external href="https://www.facebook.com/GemeenteUtrecht">
          <UtrechtIconFacebook />
        </LinkSocial>
      </ListSocialItem>
      <ListSocialItem>
        <LinkSocial aria-title="instagram" external href="https://www.instagram.com/GemeenteUtrecht/">
          <UtrechtIconInstagram />
        </LinkSocial>
      </ListSocialItem>
      <ListSocialItem>
        <LinkSocial
          aria-title="linkedin"
          external
          href="https://www.linkedin.com/company/gemeente-utrecht/?originalSubdomain=nl"
        >
          <UtrechtIconLinkedin />
        </LinkSocial>
      </ListSocialItem>
      <ListSocialItem>
        <LinkSocial aria-title="twitter" external href="https://twitter.com/gemeenteutrecht">
          <UtrechtIconTwitter />
        </LinkSocial>
      </ListSocialItem>
      <ListSocialItem>
        <LinkSocial title="whatsapp" external href="https://api.whatsapp.com/send?phone=31624927665">
          <UtrechtIconWhatsapp />
        </LinkSocial>
      </ListSocialItem>
    `,
  },
});
