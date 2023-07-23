import React, { FunctionComponent } from 'react';
import Carousel, {CarouselProductItem} from "@/components/Carousel/Carousel";

interface OwnProps {}

type Props = OwnProps;

const items: CarouselProductItem[] = [
  {
    id: '2',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '6',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '5',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '4',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '3',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '1',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '1221',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '121',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '12',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '17',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '19',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
  {
    id: '10',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5343a1db6e9c4fc18803af3b00c30305_9366/Hoops_3.0_Low_Classic_Vintage_Shoes_White_HP7944_01_standard.jpg',
    title: 'Hoops 3.0 Low Classic Vintage Shoes',
    price: '65',
    type: 'small',
    category: 'Essentials',
    code: 'new'
  },
]

const CarouselShoes: FunctionComponent<Props> = (props) => {

  return (
    <div className='mb-20'>
      <Carousel title='New Arrivals' items={items} type='infinite'/>
    </div>
  );
};

export default CarouselShoes;
