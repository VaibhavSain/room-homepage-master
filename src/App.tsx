import './App.css';
import {head1,head2,head3,para1,para2,para3} from './text';
import rightArrow from './assets/icon-angle-right.svg';
import leftArrow from './assets/icon-angle-left.svg';
import image1 from './assets/desktop-image-hero-1.jpg';
import image2 from './assets/desktop-image-hero-2.jpg';
import image3 from './assets/desktop-image-hero-3.jpg';
import darkImg from './assets/image-about-dark.jpg';
import lightImg from './assets/image-about-light.jpg';
import logo from './assets/logo.svg';
import close from './assets/icon-close.svg';
import icon from './assets/icon-hamburger.svg';
import arrow from './assets/icon-arrow.svg';
import { useState } from 'react';
function App() {

  let [openNav, setOpenNav] = useState(false);
  let [image,setImage] = useState(image1);
  let [para,setPara] = useState(para1);
  let [head,setHead] = useState(head1);

  function next() {
    if(image == image1) {
      setImage(image2);
      setPara(para2);
      setHead(head2);
    }
    else if(image == image2) {
      setImage(image3);
      setPara(para3);
      setHead(head3);
    }
    else {
      setImage(image1);
      setPara(para1);
      setHead(head1);
    }
  }

const prev = function() {
  if(image == image2) {
    setImage(image1);
    setPara(para1);
    setHead(head1);
  }
  else if(image == image3) {
    setImage(image2);
    setPara(para2);
    setHead(head2);
  }
  else if(image == image1) {
    setImage(image3);
    setPara(para3);
    setHead(head3);
  }
  else {
    setImage(image1);
    setPara(para1);
    setHead(head1);
  }
}


  return (
    <div className='h-[100rem] lg:h-[48rem]  relative w-screen'>
      <div className={
        openNav == true ? `bg-white  lg:hidden  h-[5rem] gap-8 md:gap-20 pl-4 md:pl-[5rem] pt-5 flex flex-row z-20 absolute  left-0 top-0 w-full`
          : ''
      }>

        <img src={close} onClick={() => setOpenNav(!openNav)} className='h-[1.50rem]' />
        <p > Home</p>
        <p >Shop</p>
        <p > About</p>
        <p >Contact</p>
      </div>
      <ul className='lg:flex lg:visible absolute hidden  lg:left-[11rem] text-white  lg:text-[14px] lg:top-[1.80rem] top-0 flex-row z-30 gap-5'>
        <p className='hover:cursor-pointer hover:underline hover:underline-offset-4'> Home</p>
        <p className='hover:cursor-pointer hover:underline hover:underline-offset-4'>Shop</p>
        <p className='hover:cursor-pointer hover:underline hover:underline-offset-4'> About</p>
        <p className='hover:cursor-pointer hover:underline hover:underline-offset-4'>Contact</p>

      </ul>
      <img src={icon} onClick={() => setOpenNav(!openNav)} className='z-10 left-[9%] lg:hidden top-8 absolute' />
      <img src={logo} className='absolute lg:left-[4rem] h-[.90rem] md:left-[46%] z-10  left-[40%] top-8' />
      <img src={image} className='h-[20rem] lg:h-[32rem] lg:w-[50rem] absolute md:w-full top-0 left-0 bg-contain w-fit' />
      <div className='h-[3.50rem] lg:right-[26.37rem]  lg:w-[9rem] lg:gap-16 lg:h-[4rem] lg:top-[28rem] w-[7rem] items-center justify-center gap-10 flex flex-row bg-black absolute right-0 top-[16.50rem] z-10'>
        <div onClick={prev} className='hover:bg-slate-400 cursor-pointer absolute pt-5 pl-7 left-0 w-[4.50rem] h-full'>
          <img className='h-[1.40rem]' src={leftArrow} />
        </div>
        <div onClick={next} className='hover:bg-slate-400 cursor-pointer absolute pt-5 pl-7 right-0 w-[4.50rem] h-full'>
          <img className='h-[1.40rem]' src={rightArrow} />
        </div>
      </div>
      <h1 className='absolute md:w-[33rem] lg:w-[28rem] lg:top-[5rem] lg:text-4xl lg:left-[56rem] top-[23rem] left-[8%] md:left-[24%] md:text-5xl text-4xl font-semibold '>
        {/* Discover innovative <br /> ways to decorate */}
        {head}
        </h1>
      <p className='text-[rgba(0,0,0,0.5)] md:w-[28rem] w-[20rem] lg:hidden lg:top-[11rem] lg:left-[56rem] lg:text-[16px] md:text-lg md:top-[30rem] md:left-[24%]  leading-6 text-[15px] left-[2rem] top-[29rem] z-10 absolute '> 
        {/* We provide unmatched quality, comfort, and <br /> style for property owners across the country. <br />
        Our experts combine form and function in <br /> bringing your vision to life. Create a room in <br /> your
        own style with our collection and make your <br /> property a reflection of you and what you love.</p> */} {para}</p>
      <p className='text-[rgba(0,0,0,0.5)] w-[26rem] hidden lg:flex  lg:top-[11rem] lg:left-[56rem] lg:text-[14px] md:text-lg md:top-[30rem]  md:left-[24%]  leading-6 text-[15px] left-[2rem] top-[29rem] z-10 absolute '>
         {/* We provide unmatched quality, comfort, and  style for property <br /> owners across the country.
        Our experts combine form and <br /> function in  bringing your vision to life. Create a room in  your <br />
        own style with our collection and make your  property a <br /> reflection of you and what you love. */}
        {para}
        </p>
      <p className='absolute lg:top-[22.50rem] lg:left-[56rem] uppercase tracking-[10px] md:top-[42rem] md:left-[34%] flex flex-row gap-10 z-10 hover:cursor-pointer hover:text-[#b6b6b6] left-[2rem] top-[41rem]'>Shop now<img src={arrow} className='h-[.90rem] absolute left-[12rem] top-[0.20rem] w-[2.50rem]' /></p>
      <img src={darkImg} className='z-10 lg:h-[16rem] lg:left-0 lg:top-[32rem] lg:w-[26rem] absolute md:w-full h-[20rem] bg-contain w-fit left-0 top-[46rem]' />
      <h2 className='uppercase absolute lg:top-[34rem] lg:left-[33%] md:left-[28%] md:text-2xl lg:text-[16px] left-[8%] font-medium top-[69rem] tracking-[3px] text-black'>About our furniture</h2>
      <p className='text-[rgba(0,0,0,0.5)] lg:hidden   lg:left-[36%] lg:text-sm lg:top-[36rem] md:text-lg md:left-[28%]  leading-6 text-[14px] left-[2rem] top-[72rem] z-10 absolute '> Our multifunctional collection blends design and <br /> function to suit your individual taste.
        Make each <br /> room unique, or pick a cohesive theme that best <br /> express your interests and what
        inspires you.<br /> Find the furniture pieces you need, from <br /> traditional to contemporary styles
        or anything in <br /> between. Product specialists are available to <br /> help you create your dream space.</p>
      <p className='text-[rgba(0,0,0,0.5)] hidden lg:flex  lg:left-[33%] lg:text-[14px] lg:top-[37rem] md:text-lg md:left-[28%]  leading-6 text-[14px] left-[2rem] top-[72rem] z-10 absolute '> Our multifunctional collection blends design and  function to suit your <br /> individual taste.
        Make each  room unique, or pick a cohesive theme that best <br /> express your interests and what
        inspires you. Find the furniture pieces you <br /> need, from  traditional to contemporary styles
        or anything in between. <br /> Product specialists are available to help you create your dream space.</p>
      <img src={lightImg} className='z-10 lg:w-[26.50rem]  lg:h-[16rem] lg:left-[69%] lg:top-[32rem] absolute md:w-full h-[20rem] bg-contain w-fit left-0 top-[87rem]' />
    </div>
  )
}

export default App
