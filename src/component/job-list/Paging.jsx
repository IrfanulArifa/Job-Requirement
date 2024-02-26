import { useState, useEffect } from "react";
const Paging = ({pagingLength, pagingClickHandler}) => {
    const [clicked, setClicked] = useState(Array(pagingLength.length).fill(false))

    useEffect(() => {
      setClicked(prevState => {
        const newState = [...prevState];
        newState[0] = true
        return newState
      });
    }, [pagingLength])

    const handleClick = (idx) => {
      
      const newClicked = Array(pagingLength.length).fill(false)
      newClicked[idx] = true
      setClicked(newClicked)

      pagingClickHandler(idx)
    }
    
    return (
        <nav className="mt-4">
          <ul className="flex justify-center">
            {
              pagingLength.map((_, idx) => (
                <li key={idx}>
                  {
                    (clicked[idx]) ?
                    <button className={`mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold`} onClick={() => handleClick(idx)}>
                      {idx+1}
                    </button>
                     :
                    <button className={`mx-1 px-6 py-4 rounded shadow text-blue-500 bg-white`} onClick={() => handleClick(idx)}>
                      {idx+1}
                    </button>
                  }
                </li>
            ))}
          </ul>
        </nav>
    );
}

export default Paging;
