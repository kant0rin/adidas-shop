'use client';

import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import ItemCard from '@/components/cards/ItemCard/ItemCard';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import MyLink from '@/components/ui/links/MyLink/MyLink';
import { className } from 'postcss-selector-parser';
import classNames from 'classnames';
import {FaArrowRightLong} from "react-icons/fa6";

type ItemCardTypes = 'big' | 'small';

export type CarouselProductItem = {
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
};

export type CarouselCategoryItem = {
  image: string;
  id: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

interface CaouselProps {
  title?: string;
  items: CarouselProductItem[] | CarouselCategoryItem[];
  type: 'infinite' | 'simple' | 'categories';
}

type Props = CaouselProps;

const Carousel: FunctionComponent<Props> = ({ items, title, type }) => {
  if (type === 'infinite') {
    const [activeNumber, setActiveNumber] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const onNextClick = () => {
      const container = scrollRef.current;
      if (container) {
        const maxScroll = scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth;

        if (container.scrollLeft === maxScroll) {
          scrollRef.current?.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current?.scrollTo({
            left: Math.ceil(
              scrollRef.current.scrollLeft + (scrollRef.current.scrollWidth / items.length) * 5
            ),
            behavior: 'smooth'
          });
        }
      }
    };

    const onBackClick = () => {
      if (scrollRef.current?.scrollLeft === 0) {
        scrollRef.current?.scrollTo({
          left: scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth,
          behavior: 'smooth'
        });
      } else {
        scrollRef.current?.scrollTo({
          left: Math.ceil(
            scrollRef.current.scrollLeft - (scrollRef.current.scrollWidth / items.length) * 5
          ),
          behavior: 'smooth'
        });
      }
    };

    return (
      <div className='flex w-full flex-col'>
        <div className='container mb-10 flex w-full items-center justify-between'>
          <h1 className='flex items-center gap-4 text-[22px] font-bold leading-[35px] sm:text-[28px]'>
            <BsArrowRight size={38} />
            {title}
          </h1>
          <div className='hidden sm:flex'>
            <button
              onClick={onBackClick}
              className='bg-white p-[12px] text-black transition-all duration-300 hover:bg-black hover:text-white'
            >
              <LiaAngleLeftSolid size={20} />
            </button>
            <button
              onClick={onNextClick}
              className='bg-white p-[12px] text-black transition-all duration-300 hover:bg-black hover:text-white'
            >
              <LiaAngleRightSolid size={20} />
            </button>
          </div>
        </div>
        <div
          className='flex snap-x snap-mandatory overflow-x-auto sm:overflow-x-hidden   '
          ref={scrollRef}
        >
          <ul className='paddings flex  w-full gap-[20px]'>
            {items.map((item: CarouselProductItem | any) => {
              return (
                <li key={item.id}>
                  <ItemCard {...item} />
                </li>
              );
            })}
            <li className='j'></li>
          </ul>
        </div>
      </div>
    );
  }
  if (type === 'categories') {
    const [activeNumber, setActiveNumber] = React.useState(1);
    const scrollRef = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
      const container = scrollRef.current;
      const handler = () => {

      };

      if (container) {
        container.addEventListener('scroll', handler, {
          capture: false,
          passive: true
        });
      }

      return () => {
        if (container) {
          container.removeEventListener('scroll', handler);
        }
      };
    }, [scrollRef, activeNumber, items.length]);

    const onNextClick = () => {
      const nextActiveNumber = activeNumber + 1;

      scrollRef.current?.scrollTo({
        left: scrollRef.current.scrollLeft + (scrollRef.current.scrollWidth / items.length + 20)*2,
        behavior: 'smooth'
      });
      setActiveNumber(nextActiveNumber);
    };

    const onBackClick = () => {
      const prevActiveNumber = activeNumber - 1;
      scrollRef.current?.scrollTo({
        left: scrollRef.current.scrollLeft - (scrollRef.current.scrollWidth / items.length + 20)*2,
        behavior: 'smooth'
      });
      setActiveNumber(prevActiveNumber);
    };

    const isBackDisabled = activeNumber === 1;
    const isNextDisabled = Math.ceil(items.length / 2) - 1 === activeNumber;

    return (
      <div className='container relative w-full'>
        <button
          onClick={onBackClick}
          className={classNames(
            'absolute left-0 top-1/2 -translate-y-0.5 bg-white border border-black  p-[10px] duration-300 hover:text-text-hover',
            { hidden: isBackDisabled },
            { 'lg:block hidden': !isBackDisabled }
          )}
        >
          <BsArrowLeft size={27}/>
        </button>
        <button
          onClick={onNextClick}
          className={classNames(
            'absolute right-0 top-1/2 -translate-y-0.5 bg-white border border-black  p-[10px] duration-300 hover:text-text-hover',
            { hidden: isNextDisabled },
            { 'lg:block hidden': !isNextDisabled }
          )}
        >
          <BsArrowRight size={27}/>
        </button>
        <ul
          ref={scrollRef}
          className='flex w-full gap-[10px] overflow-x-auto lg:overflow-x-hidden  '>
          {items.map((item: CarouselCategoryItem | any) => {
            return (
              <li
                key={item.id}
                className='flex min-w-[calc(100%/2)] flex-col object-cover sm:min-w-[calc(100%/3)] lg:min-w-[calc(100%/4)]'
              >
                <img src={item.image} alt='image' />
                <p className='mt-[10px] text-[16px] font-semibold leading-[36px]'>{item.title}</p>
                <p className='mb-10 text-[13px]'>{item.description}</p>
                <MyLink href={item.href} type='small'>
                  {item.buttonText}
                </MyLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Carousel;
