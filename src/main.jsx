import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Error404NotFound from './pages/Error404NotFound.jsx';
import ErrorProvoker from './pages/ErrorProvoker.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
    <Route path="about" element={()=><h1>About</h1>} />
    <Route path='error' element={<ErrorProvoker/>} />
    <Route path="*" element={<Error404NotFound/>} />  

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);