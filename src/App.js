import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// nav folder
import Navbar from './nav/Navbar';
import SideNav from './nav/SideNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*Navbar*/}
      
      <SideNav />
      <Navbar />

      <Routes>
        {/* Format <Route path="/" exact element = {<Home />} /> */}


        {/* Redirect to /not-found for all other routes */}
          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
          {/* <Route path="/not-found" element={<NotFound />} /> */}

      </Routes>


     </BrowserRouter> 
    </div>
  );
}

export default App;
