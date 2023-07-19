import type {Meta, StoryObj} from "@storybook/react";
import ItemCard from "@/components/cards/ItemCard/ItemCard";

const meta: Meta<typeof ItemCard> = {
  component: ItemCard,
  title: 'cards/ItemCard'
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    id: '2',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'big',
    category: 'Essentials'
  }
}
