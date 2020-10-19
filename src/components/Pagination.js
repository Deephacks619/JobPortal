import React, { useState, useEffect } from "react";
import {jobsdata } from './JobsData'
const Pagination = ({ showperpage, onPaginationChange }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showperpage * counter;
    onPaginationChange(value - showperpage, value);
  }, [counter]);

  const onButtonClick = (type) => {
      if(type ==='prev'){
          if(counter===1){
              setCounter(1)
          }
          else{
              setCounter(counter-1);
          }
      }
      else if(type ==='next'){
          if(jobsdata.length===counter){
              setCounter(counter)
          }
          else{
              setCounter(counter+1)
          }
      }
      else{
          setCounter(counter+type)
      }
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        style={{margin:'0px 5px'}}
        className="btn btn-primary"
        onClick={() => onButtonClick("prev")}
      >
        Prev
      </button>
      <button
        style={{margin:'0px 5px'}}
        className="btn btn-primary"
        onClick={() => onButtonClick(1)}
      >
        2
      </button>
      <button
        style={{margin:'0px 5px'}}
        className="btn btn-primary"
        onClick={() => onButtonClick(2)}
      >
        3
      </button>
      <button
        style={{margin:'0px 5px'}}
        className="btn btn-primary"
        onClick={() => onButtonClick(3)}
      >
        4
      </button>
      <button
        className="btn btn-primary"
        onClick={() => onButtonClick("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
