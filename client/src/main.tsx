import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/hotels" element={<List/>} ></Route> 
        <Route path = "/hotels/:id" element={<Hotel/>} ></Route> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
