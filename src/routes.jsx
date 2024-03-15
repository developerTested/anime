import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MasterLayout from './layouts/MasterLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const routeList = createBrowserRouter([
    {
        path: '/',
        element: <MasterLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                element: <HomePage />,
            }       
        ],
    }
]);

export default routeList
