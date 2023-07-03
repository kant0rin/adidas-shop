import React, { FunctionComponent } from 'react';
import './Button.scss'
import {FaArrowRightLong} from "react-icons/fa6";
import classNames from "classnames";

type ButtonVariant = 'contained' | 'outlined'
interface OwnProps {
  children: string | React.ReactNode,
  variant: ButtonVariant,
  icon?: React.ReactNode
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({children, icon, variant}) => {

  return (
    <div className='relative z-10'>
      <button className={classNames('button w-full px-4 flex justify-between items-center min-h-[50px] uppercase font-bold',
        {
          'bg-black text-white hover:text-text-hover contained': variant === 'contained'
        },
        {
          'bg-white text-black hover:text-text-hover-alternative outlined': variant === 'outlined'
        }
      )

      }>
        {children}
        <FaArrowRightLong className='ml-4'/>
      </button>

    </div>
  );
};

export default Button;
