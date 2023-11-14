import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Route,Routes} from "react-router-dom";
import Midhead from './Components/Midhead';
import Plastics from './Components/Pages/Plastics';
import Wire from './Components/Pages/Wire';
import Wood from './Components/Pages/Wood';
import Glass from './Components/Pages/Glass';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/plastic" element={<Plastics/>}></Route>
      <Route path="/wire" element={<Wire/>}></Route>
      <Route path="/wood" element={<Wood/>}></Route>
      <Route path="/glass" element={<Glass/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
