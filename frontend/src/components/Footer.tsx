

function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className='w-full h-14 bg-slate-500 text-white flex items-center justify-center'>
      <p>ProShop &copy; {year}</p>
    </footer>
  );
};

export default Footer;
