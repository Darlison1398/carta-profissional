import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar_header from './components/header/Navbar_header';
import Main from './components/main/main';
import Usuals from './components/main/components/Usuals';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div>
      <Navbar_header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
