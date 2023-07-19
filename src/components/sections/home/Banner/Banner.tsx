import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Button from "@/components/ui/buttons/Button/Button";

interface OwnProps {}

type Props = OwnProps;

const Banner: FunctionComponent<Props> = (props) => {
  return (
    <div
      className='w-full relative'
    >
      <img
        className='hidden lg:block w-full'
        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/originals-fw23-superstar-xlg-hp-mh-d_tcm221-1034940.jpg'
        alt='banner'
      />
      <img
        className='lg:hidden sm:block hidden w-full'
        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enUS/Images/originals-fw23-superstar-xlg-hp-mh-t_tcm221-1034936.jpg'
        alt='banner'
      />
      <img
        className='sm:hidden block w-full'
        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enUS/Images/originals-fw23-superstar-xlg-hp-mh-m_tcm221-1034935.jpg'
        alt='banner'
      />
      <div
        className="2xl:px-10 px-6 lg:justify-center justify-end absolute left-0 top-0 py-4 lg:w-full sm:w-[380px] w-full h-full text-white flex flex-col"
      >
        <h1 className='sm:text-[40px] text-[30px] font-bold mb-5'>SET THE SCENE</h1>
        <p className='text-[16px] font-bold leading-[24px] mb-4'>Everybody has a story. Tell yours with the Superstar XLG.</p>
        <Button variant='outlined' width='155px'>SHOP NOW</Button>
      </div>
    </div>
  );
};

export default Banner;
