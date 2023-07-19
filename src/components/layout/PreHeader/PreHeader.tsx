import React, { FunctionComponent } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface OwnProps {}

type Props = OwnProps;

const PreHeader: FunctionComponent<Props> = (props) => {
  return (
    <div className='relative flex h-[40px] w-full cursor-pointer items-center justify-center bg-black text-[12px] font-bold text-white'>
      <span className='mr-3'>FREE STANDARD SHIPPING & RETURNS</span>
      <BsChevronDown className='absolute lg:right-0 right-[6px] mt-0 h-[20px] w-[20px] font-bold lg:relative lg:mt-2 ' />
    </div>
  );
};

export default PreHeader;
