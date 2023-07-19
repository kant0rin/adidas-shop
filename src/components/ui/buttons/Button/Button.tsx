import React, { FunctionComponent } from 'react';
import './Button.scss'
import {FaArrowRightLong} from "react-icons/fa6";
import classNames from "classnames";

type ButtonVariant = 'contained' | 'outlined'
export interface ButtonProps extends ReactTagProps<'button'>{
  children: React.ReactNode,
  variant: ButtonVariant,
  icon?: React.ReactNode,
  width?: number | string
}

export const BUTTON_TEST_IDS = {
  CONTAINER: 'button-container',
  CHILDREN: 'button-children'
}


const Button: FunctionComponent<ButtonProps> = ({children, icon, variant, width}) => {

  return (
    <div
      className={classNames('relative z-10')}
      style={{width: width}}
    >
      <button data-testid={BUTTON_TEST_IDS.CONTAINER} className={classNames(`button w-full px-4 flex justify-between items-center min-h-[50px] uppercase font-bold`,
        {
          'bg-black text-white hover:text-text-hover contained': variant === 'contained'
        },
        {
          'bg-white text-black hover:text-text-hover-alternative outlined': variant === 'outlined'
        }
      )

      }>
        <span className='mr-4' data-testid={BUTTON_TEST_IDS.CHILDREN}>{children}</span>
        <FaArrowRightLong/>
      </button>

    </div>
  );
};

export default Button;
