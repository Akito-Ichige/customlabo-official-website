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
      className='w-full h-[186vh] mt-40 bg-orange-50 text-black'
    >
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-black'>
            Products
          </p>
          <p className='py-4'>価格は配送料込み(790円)で表示されます。</p>
          <br />
          <p>
            ※決済にはstripeを使用しています。当決済を利用する際に収集される情報については、以下の規約をご確認ください。
          </p>
          <br />
          <ul>
            <li>
              <a
                className='text-blue-500 font-bold'
                href='https://www.kiyac.app/c56VVu9sjSVpeqpuucAX/YGcaR8HDAICv6jJiFfXvΩ'
              >
                利用規約
              </a>
            </li>
            <li>
              <a
                className='text-blue-500 font-bold'
                href='https://www.kiyac.app/SCTLaw/YlxfZGxtsIvGLGl2eLPl'
              >
                特定商取引法に基づく表示
              </a>
            </li>
            <li>
              <a
                className='text-blue-500 font-bold'
                href='https://www.kiyac.app/privacypolicy/4hbDC5xDWUDKgwHY2o6U'
              >
                プライバシーポリシー
              </a>
            </li>
            <li>
              <a
                className='text-blue-500 font-bold'
                href='https://www.kiyac.app/Bj0pItlaVnFFbej0piQv/mAGxncXPQ6juBUA4vA4m'
              >
                配送ポリシー
              </a>
            </li>
            <li>
              <a
                className='text-blue-500 font-bold'
                href='https://www.kiyac.app/WZO2Kn1iYqhHzz9S93bU/QrVyJ2zFaWq0OVaMRJyl'
              >
                返金ポリシー
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8 py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto ' src={AMAZAKE} alt='甘酒' />
            <p className='my-4'>
              甘酒
              <br />
              <a
                className='ml2 text-blue-500'
                href='https://buy.stripe.com/4gw16s1pj2Mr5nG28d'
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
                href='https://buy.stripe.com/fZe6qMc3XgDh7vOdQW'
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
                href='https://buy.stripe.com/dR6aH21pj4Uz8zSdQU'
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
                href='https://buy.stripe.com/eVa4iE3xr1In3fycMP'
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
                href='https://buy.stripe.com/14k5mIaZT0EjeYgcMO'
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
