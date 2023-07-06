
import './App.css';
import N from './components/N';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Ragister from './components/Ragister';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
 
    <div className="App">
 
 <BrowserRouter>
 <N/> 
    <Routes>
   
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/ragister' element={<Ragister/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
 
  );
}

export default App;
