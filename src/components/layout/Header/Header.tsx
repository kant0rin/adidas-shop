import React, { FunctionComponent } from 'react';
import PreHeader from '@/components/layout/PreHeader/PreHeader';
import classNames from 'classnames';
import './Header.scss';
import {VscAccount, VscHeart} from 'react-icons/vsc';
import {PiShoppingCartThin} from "react-icons/pi";
import {BsCart3} from "react-icons/bs";
import Input from "@/components/ui/fields/Input/Input";
import {RxHamburgerMenu} from "react-icons/rx";
import {SlMagnifier} from "react-icons/sl";

interface OwnProps {}

type Props = OwnProps;

const ROUTES = [
  { title: 'MEN', link: '/' },
  { title: 'WOMEN', link: '/' },
  { title: 'KIDS', link: '/' },
  { title: 'BACK TO SCHOOL', link: '/' },
  { title: 'SALE', link: '/' },
  { title: 'SALE', link: '/' },
  { title: '3 STRIPE LIFE', link: '/' }
];

const Header: FunctionComponent<Props> = (props) => {
  return (
    <header className='flex-col flex'>
      {/*desktop header*/}
      <div className='hidden lg:flex w-full flex-col bg-white px-10'>
        <ul className='flex h-[32px] w-full items-center justify-end text-[12px] font-medium'>
          <li className='px-[10px]'>
            <a href='/' className='border-black hover:border-b'>
              help
            </a>
          </li>
          <li className='px-[10px]'>
            <a href='/' className='border-black hover:border-b'>
              orders and returns
            </a>
          </li>
          <li className='px-[10px]'>
            <a href='/' className='border-black hover:border-b'>
              join adiClub
            </a>
          </li>
          <li className=''>
            <button>
              <img
                src='https://adl-foundation.adidas.com/flags/1-2-1/ru.svg'
                alt='flag'
                className='w-[24px]'
              />
            </button>
          </li>
        </ul>
        <div className='relative flex h-[48px] items-center'>
          <div className=' relative flex-[10%] xl:flex-[25%]'>
            <svg
              className='absolute bottom-[-15px] left-0'
              width={62}
              height={60}
              viewBox='100 100 50 32'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z'
                fill='black'
              ></path>
            </svg>
          </div>
          <ul className='flex flex-[60%] items-center justify-center gap-5 xl:flex-[50%]'>
            {ROUTES.map((route, index) => {
              return (
                <li
                  className={classNames('header__link tracking-[1.5px]', {
                    'font-bold': index < 3
                  })}
                >
                  <a href={route.link}>{route.title}</a>
                </li>
              );
            })}
          </ul>
          <div className='flex flex-[30%] items-center justify-end xl:flex-[25%]'>
            <Input placeholder='Search'/>
            <VscAccount size={24} className='mx-4 cursor-pointer' />
            <VscHeart size={24} className='mr-4 cursor-pointer'/>
            <BsCart3 size={24} className=' cursor-pointer'/>
          </div>
        </div>
      </div>
      {/*mobile header*/}
      <div className='lg:hidden flex w-full container text-[16px] items-center py-[6px]'>
        <div className='flex-[40%] flex items-center'>
          <RxHamburgerMenu size={24} className='cursor-pointer mr-4'/>
          <VscHeart size={24} className='cursor-pointer'/>
        </div>
        <div className='flex-[20%] flex items-center justify-center'>
          <svg
            width={62}
            height={60}
            viewBox='100 100 50 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z'
              fill='black'
            ></path>
          </svg>
        </div>
        <div className='flex-[40%] flex justify-end items-center'>
          <VscAccount size={24} className='mr-4 cursor-pointer' />
          <SlMagnifier size={21} className='mr-4 cursor-pointer'/>
          <BsCart3 size={24} className=' cursor-pointer'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
