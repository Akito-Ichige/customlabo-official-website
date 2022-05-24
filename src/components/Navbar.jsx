import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo_transparent.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-orange-200 text-black font-bold'>
      <div>
        <img
          src={Logo}
          alt='Logo Image'
          style={{ width: '70px', marginTop: '9px', marginLeft: '4px' }}
        />
      </div>

      {/* menu */}
      {/* タブレットサイズ以上の画面からは隠すのをやめて、以下の要素を横並びにして表示する */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            Location
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Products
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      {/* タブレットサイズ以上の画面からは以下を隠す */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      {/* 三項演算子でnavを条件式にしてhiddenとabsolute（以下略）を出し分ける */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute font-bold top-0 left-0 w-full h-screen bg-orange-50 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Location
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Products
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
