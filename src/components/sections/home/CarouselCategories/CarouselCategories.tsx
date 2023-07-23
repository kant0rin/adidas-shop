import React, { FunctionComponent } from 'react';
import Carousel, {CarouselCategoryItem} from "@/components/Carousel/Carousel";

const items: CarouselCategoryItem[] = [
  {
    id: '1',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
  {
    id: '14',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
  {
    id: '13',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
  {
    id: '12',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
  {
    id: '11',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
  {
    id: '112',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
  {
    id: '2112',
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enCA/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm185-1036748.jpg',
    title: 'ALWAYS IN STYLE',
    description: 'Wear everywhere, every day.',
    buttonText: 'shop now',
    href: '/'
  },
]
interface OwnProps {}

type Props = OwnProps;

const CarouselCategories: FunctionComponent<Props> = (props) => {

  return (
    <div className='mb-20 pt-20'>
      <Carousel items={items} type='categories'/>
    </div>
  );
};

export default CarouselCategories;
