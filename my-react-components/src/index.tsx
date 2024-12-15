import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import ErrorPage from './Error-page';
import FormElements from './routes/FormElements';
import CustomComponents from './routes/CustomComponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { 
    path: '/', 
    element:  <Layout />, 
    errorElement: <ErrorPage/>,
    children: [
      { path: '/form-elements', element: <FormElements/> },
      { path: '/components', element: <CustomComponents/> }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

