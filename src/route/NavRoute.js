import { Route, Routes } from 'react-router-dom';
import Myprofile from './Myprofile';
import Myrocket from './MyRocket';
import Mymission from './Mymission';

const NavRoute = () => (

  <Routes>
    <Route path="/" element={<Myrocket />} />
    <Route path="/mymission" element={<Mymission />} />
    <Route path="/myprofile" element={<Myprofile />} />
  </Routes>
);

export default NavRoute;
