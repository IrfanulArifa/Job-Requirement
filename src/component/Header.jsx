import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({}) => {

    const logout = () => {
      localStorage.removeItem('isLogin')
    }

    return (
        <header className="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
        <Link to={'..'}>
        <img
          className="max-h-[20vh]"
          src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png"
          alt="logo"
        />
        </Link>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={logout}>
          Logout
        </button>
        </header>
    );
}

export default Header;
