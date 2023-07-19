import React, { FunctionComponent } from 'react';
import {SlMagnifier} from "react-icons/sl";

interface InputProps {
  placeholder: string
}

type Props = InputProps;

const Input: FunctionComponent<InputProps> = ({placeholder}) => {

  return (
    <div className='flex relative max-w-max'>
      <input type="text" placeholder={placeholder} className='pl-3 pr-[30px] py-[5px] text-black focus:border-[#767677] border-[#eceff1] bg-[#eceff1] font-medium border relative z-[1]'/>
      <button className='right-[5px] top-[50%] absolute z-10 -translate-y-1/2'>
        <SlMagnifier/>
      </button>
    </div>
  );
};

export default Input;
