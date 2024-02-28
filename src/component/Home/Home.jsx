import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();
    const handleUsernameChange = (event) => {
      setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const postData = {
        username: username,
        password: password
      }

      axios.post('https://fakestoreapi.com/auth/login', postData)
        .then(response => {
          console.log("Response = ", response.data)
          localStorage.setItem('isLogin', true)
          navigateTo('/job-list')
        })
        .catch(error => {
          console.log("Error = ", error)
        })
    }

    

    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg')"}}>
      <div className="rounded-xl bg-white px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-black">
          <div className="mb-8 flex flex-col items-center">
            <img src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png" width="150" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}

export default LandingPage;
