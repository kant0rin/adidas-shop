import type {Meta, StoryObj} from "@storybook/react";
import Input from "@/components/ui/fields/Input/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'ui/Input'
}


export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    placeholder: 'Поиск'
  }
}
