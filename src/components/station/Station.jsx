import './Station.css';
import { useState, useEffect } from 'react';
import { stationData } from '../../Data/stationData';

function Station() {
  const categories = ["address", "lines", "stationNumber"];
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>{currentTime}</div>
      <select>
        {categories.map((i, k) => (
          <option key={k} value={i}>
            {i}
          </option>
        ))}
      </select>
      {stationData.map((x, i) => (
        <div key={i}>
             <div >{x.street}</div>
        <div>{x.lines}</div>
        <div >{x.stationNumber}</div>
        <div >{x.address}</div>
        <div >{x.city}</div>
        </div>
       
      ))}
    </>
  );
}

export default Station;