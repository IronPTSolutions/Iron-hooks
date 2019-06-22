import React from 'react';

class UseState extends React.Component {
  state = {
    count: 0
  }

  setCount = (count) => this.setState({ count })

  render() {
    const { count } = this.state

    return (
      <div>
        <h1>UseState Hook</h1>
        <div>
          <h3>Count: {count}</h3>
          <button className="btn btn-primary mr-2" type="button" onClick={() => this.setCount(count + 1)}>
            Increase
        </button>
          <button className="btn btn-secondary mr-2" type="button" onClick={() => this.setCount(count - 1)}>
            Decrease
        </button>
          <button className="btn btn-danger" type="button" onClick={() => this.setCount(0)}>
            Reset
        </button>
        </div>
      </div>
    )
  }
}


export default UseState;