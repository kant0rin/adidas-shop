import React, { FunctionComponent } from 'react';
import Button from "@/components/ui/buttons/Button/Button";

interface OwnProps {}

type Props = OwnProps;

const SaleBanner: FunctionComponent<Props> = (props) => {

  return (
    <div
      className='w-full relative mb-20'
    >
      <img
        className='hidden lg:block w-full'
        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enCA/Images/promo-fw23-july-60off-small-en-mh-d_tcm185-1044761.jpg'
        alt='banner'
      />
      <img
        className='lg:hidden sm:block hidden w-full'
        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enCA/Images/promo-fw23-july-60off-small-en-mh-t_tcm185-1044762.jpg'
        alt='banner'
      />
      <img
        className='sm:hidden block w-full'
        src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enCA/Images/promo-fw23-july-60off-small-en-mh-m_tcm185-1044757.jpg'
        alt='banner'
      />
      <div
        className="2xl:px-52 px-6 lg:justify-center justify-end absolute left-0 top-0 py-4 lg:w-full sm:w-[380px] w-full h-full text-white flex flex-col container"
      >
        <h1 className='sm:text-[40px] text-[30px] font-bold mb-5'>SUMMER SALE</h1>
        <p className='text-[16px] font-bold leading-[24px] mb-4'>Stock up on warm weather essentials with code SAVINGS.</p>
        <Button variant='outlined' width='155px'>SHOP NOW</Button>
      </div>
    </div>
  );
};

export default SaleBanner;
