import React from 'react';
import Requirement from './Requirement';
import { Link } from 'react-router-dom';

const Card = ({data, requirementHandler}) => {
    const combinedArray = (data) => {
        return [data.role, data.level].concat(data.languages);
    }

    return (
        <>
        {
            data.map((data, idx) => (
                <li className={`relative bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-12 lg:mb-6`} key={idx}>
              <div className="absolute -top-7 w-14 lg:relative lg:w-auto lg:top-0">
                <img src={data.logo} alt={'image'} className="rounded-full w-full" />
              </div>
              <div className="w-full lg:flex justify-between items-center">
              <div>
              <div>
                <span className="text-sm text-cyan-dark font-bold">
                  {data.company}
                </span>
                {
                    ( data.new === true ) ? 
                    <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                        NEW!
                    </span> : null
                }
                {
                    ( data.featured === true) ? 
                    <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                        FEATURED
                    </span> : null
                }
              </div>
              <Link key={data.id} to={`/job-detail/${data.id}`}>
                <div className="block my-1 text-base font-bold hover:text-cyan-dark">
                      {data.position}
                </div>
              </Link>
              <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
                <li>{data.postedAt}</li>
                <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
                  {data.contract}
                </li>
                <li>{data.location}</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-wrap gap-4 border-t border-cyan-dark-grayish mt-4 pt-4 lg:border-0">
                    <Requirement data={combinedArray(data)} requirementHandler={requirementHandler}/>
                </ul>
              </div>
            </div>
          </li>
        ))}
        </>
    );
}

export default Card;
