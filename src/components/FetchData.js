import React, { useState, useEffect } from 'react';
import PieChart from 'react-simple-pie-chart';
import IronService from '../services/IronService'

const FetchData = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = async () => {
    const response = await IronService.getData()

    setData(response)
  }

  useEffect(() => { fetchData() }, [page])

  return (
    <div>
      <h1>UseState & UseEffect</h1>

      <div className="w-25">
        {data.length === 0 ? 'Loading...' : <PieChart slices={data}/>}

        <button className="btn btn-primary d-block"
          onClick={() => setPage(page + 1)}
        >{page} - Next Page</button>
      </div>
    </div>
  );
};

export default FetchData;