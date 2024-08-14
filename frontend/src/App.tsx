import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='mt-20 w-full py-4 px-6 flex-grow overflow-y-auto'>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;