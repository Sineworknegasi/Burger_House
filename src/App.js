import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hotdeals from './Components/Hot_Deals/Hotdeals';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Menu/>
      <Hotdeals/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
