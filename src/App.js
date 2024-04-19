import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// nav folder
import Navbar from './nav/Navbar';
import SideNav from './nav/SideNav';

// pages
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*Navbar*/}
      
      
      <Navbar />

      <Routes>
        {/* Format <Route path="/" exact element = {<Home />} /> */}
        <Route path = "/" exact element = {<Categories />} />

        {/* Redirect to /not-found for all other routes */}
          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
          {/* <Route path="/not-found" element={<NotFound />} /> */}

      </Routes>


     </BrowserRouter> 
    </div>
  );
}

export default App;
