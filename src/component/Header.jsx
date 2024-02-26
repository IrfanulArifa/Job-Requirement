import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
        <Link to={'..'}>
        <img
          className="max-h-[20vh]"
          src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png"
          alt="logo"
        />
        </Link>
        </header>
    );
}

export default Header;
