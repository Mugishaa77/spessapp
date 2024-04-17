import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*Navbar*/}

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
