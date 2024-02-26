import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-cyan-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
        <main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 shadow-xl border p-4">
            Explore Programming <br /> Opportunities Worldwide
          </h1>
          <p className="max-w-prose text-lg md:text-xl lg:text-2xl text-white mb-8 text-center leading-relaxed">
            Unlock a world of programming opportunities with our developer jobs
            landing page. Whether you're a seasoned developer or just starting
            out, discover exciting roles in tech hubs across the globe
          </p>
          <div className="flex justify-center">
            <Link to="/job-list">
              <button className="bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Start Your Journey Now!
              </button>
            </Link>
          </div>
        </main>
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg" // Replace with your image path
          alt="Developer working on code"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      </div>
    );
}

export default LandingPage;
