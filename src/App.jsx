import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoot from './component/protected-root/ProtectedRoot.jsx';
import LoginRoot from './component/is-login/LoginRoot.jsx';
import Home from './component/Home/Home.jsx'
import JobDetail from './component/job-detail/JobDetail';
import JobList from './component/job-list/JobList.jsx'


const App = () => {
  const isLogin = localStorage.getItem("isLogin");
  const [isAllowed, setIsAllowed] = useState(true);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
          <LoginRoot isAllowed={isAllowed}>
              <Home/>
          </LoginRoot>
          
      )
    },
    {
      path: '/login',
      children: [{
        path: '',
        element: (
          <ProtectedRoot isAllowed={isAllowed}>
            <Home/>
          </ProtectedRoot>
        )
      }]
      
    },
    {
      path: '/job-list',
      element: (
        <ProtectedRoot isAllowed={isAllowed}>
            <JobList/>
        </ProtectedRoot>
      )
    },
    {
      path: 'job-detail',
      element:(
        <ProtectedRoot isAllowed={isAllowed}>
            <JobDetail/>
        </ProtectedRoot>
      ),
      children: [{
        path: ':jobId',
      }]
    },
  ])

  useEffect(() => {
    if (isLogin) {
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }

    const intervalId = setInterval(() => {
      const newIsLogin = localStorage.getItem("isLogin");
      if ( newIsLogin ) {
        setIsAllowed(true)
      } else {
        setIsAllowed(false)
      }
    }, 1000)
    return () => clearInterval(intervalId);
  }, [isLogin])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
