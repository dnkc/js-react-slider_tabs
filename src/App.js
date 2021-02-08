import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import People from './People'

function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);


  useEffect(()=>{
    const lastIndex = people.length -1;

    if(index < 0){
      setIndex(lastIndex);
    }
    if (index > lastIndex){
      setIndex(0);
    }
  },[index, people])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1);
    }, 3000)
    return ()=> clearInterval(slider);
  }, [index])

  return (
    <div>
      <People people={people} index={index} setIndex={setIndex}/>
    </div>
  );
}

export default App;


// onClick={()=>{setIndex(index-1)}}