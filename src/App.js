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
import Plasticuser1 from './Components/Freelancers/Plastic/Plasticuser1';
import Plasticuser2 from './Components/Freelancers/Plastic/Plasticuser2';
import Plasticuser3 from './Components/Freelancers/Plastic/Plasticuser3';
import Plasticuser4 from './Components/Freelancers/Plastic/Plasticuser4';
import Wooduser1 from './Components/Freelancers/Woodernart/Wooduser1';
import Wooduser2 from './Components/Freelancers/Woodernart/Wooduser2';
import Wooduser3 from './Components/Freelancers/Woodernart/Wooduser3';
import Wooduser4 from './Components/Freelancers/Woodernart/Wooduser4';


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
      <Route path="/plasticuser1" element={<Plasticuser1/>}></Route>
      <Route path="/plasticuser2" element={<Plasticuser2/>}></Route>
      <Route path="/plasticuser3" element={<Plasticuser3/>}></Route>
      <Route path="/plasticuser4" element={<Plasticuser4/>}></Route>
      <Route path="/wooduser1" element={<Wooduser1/>}></Route>
      <Route path="/wooduser2" element={<Wooduser2/>}></Route>
      <Route path="/wooduser3" element={<Wooduser3/>}></Route>
      <Route path="/wooduser4" element={<Wooduser4/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
