import type {Meta, StoryObj} from "@storybook/react";
import Button from "@/components/ui/buttons/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ui/Button'
}


export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: ''
  }
}


