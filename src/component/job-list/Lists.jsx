import React from 'react';

const Lists = ({data, deleteFilter}) => {
    return (
        <>
           {
                data.map((data, idx) => (
                    <li className="flex" key={idx}>
                        <div class="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default">{data}</div>
                        <div>
                            <button className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark" onClick={() => deleteFilter(idx)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"></path></svg>
                            </button>            
                        </div>
                    </li>
            ))} 
        </>
    );
}

export default Lists;
