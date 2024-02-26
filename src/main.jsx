import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './component/landing-page/LandingPage.jsx';
import App from './App.jsx';
import JobDetail from './component/job-detail/JobDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: 'job-list',
    element: <App/>
  },
  {
    path: 'job-detail',
    element: <JobDetail/>,
    children: [{
      path: ':jobId',
    }]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
