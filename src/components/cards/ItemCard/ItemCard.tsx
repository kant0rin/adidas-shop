import React, { FunctionComponent } from 'react';
import { ImageProps } from 'next/image';
import classNames from 'classnames';
import './ItemCard.scss'


type ItemCardTypes = 'big' | 'small';

interface OwnProps {
  /**
   * id
   */
  id: string;
  /**
   * image
   */
  image: string;
  /**
   * title
   */
  title: string;
  /**
   * type
   */
  type: ItemCardTypes;
  /**
   * category
   */
  category: string;
  /**
   * price
   */
  price: string;
  /**
   * code
   */
  code?: string;
  /**
   * sell price
   */
  salePrice?: string;
}

type Props = OwnProps;

const ItemCard: FunctionComponent<Props> = ({
  title,
  salePrice,
  id,
  price,
  code,
  category,
  image,
  type
}) => {
  return (
    <div className={classNames( 'item-card flex flex-col cursor-pointer border-white border hover:border-black',
      {'2xl:w-[378px] xl:w-[340px] lg:w-[300px] w-[300px]': type==='big'},
      {'2xl:w-[280px] lg:w-[220px] sm:-[165px] text-[12px]': type==='small'}
    )}>
      <div className='w-full relative'>
        <img src={image} alt='image' className='block w-full' />
        <span
          className='item-card__price absolute left-[5px] px-1 py-[2px] bottom-0 z-10 bg-white flex items-center'
        >
          <span className={classNames({'text-black': !salePrice}, {'text-text-disabled line-through': salePrice})}>${price}</span>
          {salePrice && <span className=' ml-[5px] text-text-sale-price'>${salePrice}</span>}
        </span>
      </div>
      <div className='w-full flex-col pt-[10px] pb-5 px-[10px]'>
        <p className='text-black'>{title}</p>
        <p className='text-[#767677]'>{category}</p>
        {
          code && <span className='text-black'>code: {code}</span>
        }
      </div>
    </div>
  );
};

export default ItemCard;
