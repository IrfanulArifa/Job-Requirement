import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { jsonData } from '../../data/data';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const JobDetail = () => {
    const {jobId} = useParams();
    const navigateTo = useNavigate();
    const data = jsonData.find(job => job.id == parseInt(jobId))
    const showAlert = () => {
        window.alert("Thank You for your application");
        navigateTo('/job-list');
    }

    return (
        <>
            <Header/>
        <div className="min-h-[80vh] relative">
        <div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-10">
            <Link to={'/job-list'}>
                <button className="absolute top-0 left-0 mt-4 ml-4 bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
                    Back
                </button>
            </Link>
          <div className="flex items-center mb-4 mt-8">
            <img src={data.logo} className="w-12 h-12 mr-4" alt="Company Logo" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">{data.position}</h1>
              <p className="text-[#787878]">{data.company}</p>
            </div>
          </div>
          <div className="flex items-center">
            {
                ( data.new === true) ? <span className="bg-cyan-dark text-white py-1 px-2 rounded-full mr-2">
                    NEW!
                </span> : null
            }
            {
                ( data.featured === true) ? <span className="bg-[#111111] text-white py-1 px-2 rounded-full">
                    FEATURED
                </span> : null
            }
            
            
          </div>
          <hr className="my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Job Description</h2>
              <p className="text-[#787878]">{data.description}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Requirements</h2>
              <div className="flex flex-wrap">
                <span className="bg-[#0f1e32] text-white py-1 px-2 rounded-full mr-2 mb-2">
                  {data.level}
                </span>
                {
                    data.languages.map((language, idx) => (
                        <span className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
                            {language}
                        </span>
                    ))
                }
                {
                    data.tools.map((tool, idx) => (
                        <span key={idx} className="bg-[#b47b44] text-white py-1 px-2 rounded-full mr-2 mb-2">
                            {tool}
                        </span>
                    ))
                }
                
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex items-center text-gray-600">
            <p className="mr-4">{data.postedAt}</p>
            <p className="mr-4">{data.contract}</p>
            <p>{data.location}</p>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md" onClick={showAlert}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
        </>
    );
}

export default JobDetail;
