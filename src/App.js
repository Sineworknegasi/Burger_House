import './App.css';
import Contact from './Components/Contact/Contact';
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
    </div>
  );
}

export default App;
