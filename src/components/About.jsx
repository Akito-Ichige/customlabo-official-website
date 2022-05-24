import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name='about' className='w-full h-[94vh] bg-orange-50 text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-400'>
              Location
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right'>
            <p>
              日本アルプスの城下町、松本市にオフィスを構えています。
              <br />
              お問い合わせは
              <Link to='contact' smooth={true} duration={500}>
                <span className='text-blue-500'>こちらから。</span>
              </Link>
            </p>
          </div>
          <div>
            <iframe
              className='w-full h-60'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.6418073965606!2d137.94703951508677!3d36.24819428006607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d0dc51e5d84e9%3A0xf230eb88b8c7e093!2z44CSMzk5LTgyNTEg6ZW36YeO55yM5p2-5pys5biC5bO25YaF77yT77yW77yY77yS!5e0!3m2!1sja!2sjp!4v1653349876561!5m2!1sja!2sjp'
              title='location'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
