import React, { useState, useEffect } from 'react';
import PieChart from 'react-simple-pie-chart';
import IronService from '../services/IronService'

const FetchData = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await IronService.getData()

    setData(response)
  }

  useEffect(() => { fetchData() }, [])

  return (
    <div>
      <h1>UseState & UseEffect</h1>

      <div className="w-25">
        {data.length === 0 ? 'Loading...' : <PieChart slices={data}/>}
      </div>
    </div>
  );
};

export default FetchData;