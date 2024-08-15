import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Cpu } from 'lucide-react';

function Header() {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
    // Prevent body scroll
    if (!mobileNav) document.body.style.overflow = 'hidden';
    if (mobileNav) document.body.style.overflow = 'unset';
  };

  return (
    <header className='fixed flex justify-center items-center h-20 w-full p-4 bg-slate-600 shadow-xl border-b border-slate-700/30 z-50'>
      <nav className='flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 font-bold'>
        <Link to='/'>
          <h2 className='text-white text-2xl flex items-center justify-center gap-1'>
            <Cpu />
            <span>ProShop</span>
          </h2>
        </Link>
        <div className='hidden sm:flex items-center justify-center gap-4'>
          <Link to='/cart'>
            <button className='flex items-center btn text-white btn-ghost border border-slate-500 hover:border-slate-400'>
              <ShoppingCart /> Cart
            </button>
          </Link>
          <Link to='/sign-in'>
            <button className='flex items-center btn btn-primary'>
              <User /> Sign In
            </button>
          </Link>
        </div>

        <div className='block sm:hidden cursor-pointer z-10' onClick={handleMobileNav}>
          {mobileNav ? <X color='white' size={30} /> : <Menu color='white' size={30} />}
        </div>

        <div className={mobileNav 
          ? 'bg-slate-600 sm:hidden left-0 w-[75%] list-none fixed h-[calc(100vh-5rem)] top-20 flex flex-col items-center justify-between ease-in duration-300 z-10 shadow-2xl px-4 pt-6 pb-8 gap-4' 
          : 'bg-slate-600 left-[-100%] list-none fixed h-[calc(100vh-5rem)] top-20 flex flex-col items-center justify-between ease-in duration-300 z-10 shadow-2xl px-4 pt-6 pb-8 gap-4'}
        >
          <Link to='/cart'>
            <button className='flex items-center btn text-white btn-ghost border border-slate-500 hover:border-slate-400'>
              <ShoppingCart /> Cart
            </button>
          </Link>
          <Link to='/sign-in'>
            <button className='flex items-center btn btn-primary'>
              <User /> Sign In
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
