import './App.css';
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import Navbar from './components/Navbar';
import particles from './helpers/particles';
import { useLocation } from 'react-router-dom';
import Rout from './Pages/Rout';



function App() {
  const location = useLocation()
  const renderParticle= location.pathname==="/"
  const handleInit=async (main)=>{
    await loadFull(main)
  }
  return (
    <div className="App">
    {renderParticle && (<Particles id="particles" options={particles} init={handleInit}/>)}
     <Navbar />
     <Rout />
    </div>
  );
}

export default App;
