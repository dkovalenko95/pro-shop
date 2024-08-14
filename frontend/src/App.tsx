import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='mt-20 w-full py-4 px-6 flex-grow overflow-y-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;