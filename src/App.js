import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hotdeals from './Components/Hot_Deals/Hotdeals';
import Menus from './Components/menu/Menus';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='main'>
        <Header/>
        <Menus/>
        <Hotdeals/>
      </div>
    </div>
  );
}

export default App;
