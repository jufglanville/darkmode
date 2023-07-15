import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

function App() {
  return (
    <>
      <Navbar />
      <DarkModeToggle />
      <Main />
      <Footer />
    </>
  );
}

export default App;
