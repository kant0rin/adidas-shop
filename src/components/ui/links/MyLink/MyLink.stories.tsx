import type { Meta, StoryObj } from '@storybook/react';

import type { MyLinkProps } from './MyLink';
import MyLink from "./MyLink";

const myLinkProps: MyLinkProps = {
  children: 'adidas',
  type: 'small',
  href: '/xuy'
}

type Story = StoryObj<typeof MyLink>;
const ButtonTemplate: Story = { render: (args) => <MyLink {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = myLinkProps;

export default {
  component: MyLink,
  title: 'ui/links/MyLink'
} as Meta<typeof MyLink>;
