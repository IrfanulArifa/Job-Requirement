import { jsonData } from '../../data/data';
import Padding from '../../component/job-list/Paging';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../../component/job-list/Card';
import Lists from '../../component/job-list/Lists';
import Header from '../../component/Header';


const JobList = () => {
  const [newData, setNewData] = useState(jsonData);
  const [tempArray, setTempArray] = useState(newData.slice(0,5));
  const [paging, setPaging] = useState([]);
  const [requrement, setRequirement] = useState([]);

  useEffect(() => {
    const pagingLength = pagingLengthCounter(newData)
    setPaging(Array.from({length:pagingLength}))
  }, [newData])

  useEffect(() => {
    if ( requrement.length !== 0) {
      const temp = filteredArray()
      setNewData(temp)
      setTempArray(temp.slice(0,5))
    } else {
      setNewData(jsonData)
      setTempArray(jsonData.slice(0,5))
    }
  }, [requrement])

  const pagingCount = (idx) => {
    let index = idx + 1
    setTempArray(newData.slice((index-1) * 5 , index * 5))
  }

  const pagingLengthCounter = (newData) => {
    let dataMod = newData.length % 5
    let dataDiv = Math.floor(newData.length / 5)
    if ( dataMod === 0 ) {
      return dataDiv
    } else {
      return dataDiv + 1
    }
  }

  const addArray = (array) => {
    setRequirement([...requrement, array])
  }

  const filteredArray = () => {
    let realData = jsonData
    let dataAfterFilter = []
    if ( requrement !== 0 ) {
      for ( let requrements of requrement ) {
        dataAfterFilter = []
        for ( let _data of realData ) {
          if ( _data.role === requrements || _data.level === requrements || _data.languages.includes(requrements)) {
            dataAfterFilter.push(_data)
          }
        }
        realData = realData.filter(item => dataAfterFilter.includes(item))
      }
    } else {
      dataAfterFilter = jsonData
    }
    return dataAfterFilter
  }

  const deleteFilter = (index) => {
    const updateFilter = requrement.filter((requrement,i) => i !== index);
    setRequirement(updateFilter)
  }

  const resetFilter = () => {
    setRequirement([])
  }

  

  return (
    <>
      <Header/>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          { (requrement.length > 0) ?  
            <div className="w-full max-w-5xl min-h-[4rem] mb-10">
            <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
                <ul className="flex flex-wrap gap-4">
                    <Lists data={requrement} deleteFilter={deleteFilter}/>
                </ul>
                <button className="text-sm text-cyan-dark font-bold underline" onClick={() => resetFilter()}>
                  Clear
                </button>
              </div>
            </div> : null
          }
          
          <div>
          <ul>
            {
              <Card data={tempArray} requirementHandler={addArray}/>
            }
          </ul>
          </div>
          <Padding pagingLength={paging} pagingClickHandler={pagingCount}/>
        </div>
      </main>
    </>
  );
};

export default JobList;