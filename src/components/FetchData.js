import React from 'react';
import PieChart from 'react-simple-pie-chart';
import IronService from '../services/IronService'

class FetchData extends React.Component {
  state = {
    data: []
  }

  fetchData = async () => {
    const data = await IronService.getData()

    this.setState({ data })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <h1>UseState & UseEffect</h1>

        <div className="w-25">
          {data.length === 0 ? 'Loading...' : <PieChart slices={data} />}
        </div>
      </div>
    );
  }
};

export default FetchData;