import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-orange-50'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-600'>LOVE MATSUMOTO</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-orange-400'>
          CUSTOM LABO
        </h1>
        <h2 className='text-xl sm:text-xl font-bold text-black'>
          地域に根ざしたサービス
        </h2>
        <p className='text-black py-4 max-w-[700px]'>
          合同会社カスタムラボは、地元長野県の商品を扱う、地域一体型の事業を展開しています。
          <br />
          詳細は
          <Link to='skills' smooth={true} duration={500}>
            <span className='text-blue-500'>こちらから。</span>
          </Link>
        </p>
        <div>
          <button className='text-white group border-2 border-orange-100 rounded-md font-bold px-6 py-3 my-2 flex items:center bg-orange-400 hover:bg-orange-300 hover:border-orange-300'>
            <Link to='skills' smooth={true} duration={500}>
              商品について知る{' '}
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 mt-1' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
