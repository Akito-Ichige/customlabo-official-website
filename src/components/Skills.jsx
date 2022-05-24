import React from 'react';

// 商品画像
import AMAZAKE from '../assets/amazake.jpg';
import SAKEKASU from '../assets/sakekasu.jpg';
import KURUMISO from '../assets/kurumi.jpg';
import KARAMISO from '../assets/karamiso.jpg';
import KUROMAME from '../assets/kuromame.jpg';
import HATENA from '../assets/hatena.jpg';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full h-[152vh] mt-40 bg-orange-50 text-black'
    >
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-black'>
            Products
          </p>
        </div>
        <br />
        <h2 className='text-blue-400 text-2xl'>
          <a href='https://customlabo.official.ec/'>公式ECサイトはこちら</a>
        </h2>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8 py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto ' src={AMAZAKE} alt='甘酒' />
            <p className='my-4'>
              甘酒
              <br />
              <a
                className='ml2 text-blue-500'
                href='https://customlabo.official.ec/items/62961746'
              >
                購入する
              </a>
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={SAKEKASU} alt='酒粕' />
            <p className='my-4'>
              酒粕
              <br />
              <a
                className='ml2 text-blue-500'
                href='https://customlabo.official.ec/items/62961975'
              >
                購入する
              </a>
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={KARAMISO} alt='味噌(辛)' />
            <p className='my-4'>
              辛味噌
              <br />
              <a
                className='ml2 text-blue-500'
                href='https://customlabo.official.ec/items/62961865'
              >
                購入する
              </a>
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={KURUMISO} alt='味噌(胡桃)' />
            <p className='my-4'>
              胡桃味噌
              <br />
              <a
                className='ml2 text-blue-500'
                href='https://customlabo.official.ec/items/62961929'
              >
                購入する
              </a>
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={KUROMAME} alt='黒豆コーヒー' />
            <p className='my-4'>
              黒豆コーヒー
              <br />
              <a
                className='ml2 text-blue-500'
                href='https://customlabo.official.ec/items/62961975'
              >
                購入する
              </a>
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HATENA} alt='? icon' />
            <p className='my-4'>準備中</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HATENA} alt='? icon' />
            <p className='my-4'>準備中</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HATENA} alt='? icon' />
            <p className='my-4'>準備中</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
