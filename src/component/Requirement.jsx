import React from 'react';

const Requirement = ({data, requirementHandler}) => {
    return (
        <>
        {
            data.map((req,idx) => (
            <li key={idx}>
                <button onClick={() => requirementHandler(req)}>
                    <label class="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md hover:cursor-pointer">{req}</label>
                </button>
            </li>
            ))
        }
        </>
        
    );
}

export default Requirement;
