import React, { FunctionComponent } from 'react';
import MyLink from "@/components/ui/links/MyLink/MyLink";

interface OwnProps {}

type Props = OwnProps;

const ShoesCategories: FunctionComponent<Props> = (props) => {

  return (
    <section className='container grid lg:grid-cols-4 grid-cols-2 w-full gap-[10px] flex-wrap mb-20 py5 px-4 '>
      <div className='flex flex-col bg-[#ebeef0] items-center justify-center'>
        <img className='w-[144px] mb-4' src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e95a999945064900bac6ad0800d365a1_9366/nmd_r1-primeblue-shoes.jpg" alt="black_shoes"/>
        <MyLink href='/' type='small'>all black shoes</MyLink>
      </div>
      <div className='flex flex-col bg-[#ebeef0] items-center justify-center'>
        <img className='w-[144px] mb-4' src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/7a235edf54e04a9f8adeaf4100d6251d_9366/campus-00s-shoes.jpg" alt="campus"/>
        <MyLink href='/' type='small'>campus</MyLink>
      </div>
      <div className='flex flex-col bg-[#ebeef0] items-center justify-center'>
        <img className='w-[144px] mb-4' src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a45e6248a34a40b1abdea7c074e9c045_9366/ultraboost-light-shoes.jpg" alt="ultraboost"/>
        <MyLink href='/' type='small'>ULTRABOOST</MyLink>
      </div>
      <div className='flex flex-col bg-[#ebeef0] items-center justify-center'>
        <img className='w-[144px] mb-4' src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f39b99c10ebb4257aad9ad1e00dd3afd_9366/nmd_r1-primeblue-shoes.jpg" alt="white_shoes"/>
        <MyLink href='/' type='small'>all white shoes</MyLink>
      </div>
    </section>
  );
};

export default ShoesCategories;
