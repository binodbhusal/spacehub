import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import NavRoute from './route/NavRoute';
function App() {
  return (
   <BrowserRouter>
        <Navbar />
     <NavRoute />
     </BrowserRouter>
  );
}
export default App;
