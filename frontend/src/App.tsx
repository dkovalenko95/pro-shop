import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='mt-20 max-w-[1440px] my-0 mx-auto w-full py-4 sm:py-6 px-5 sm:px-6 md:px-10 2xl:px-16 flex-grow overflow-y-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;