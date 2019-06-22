import React from 'react';

class UseEffect extends React.Component {
  state = {
    title: 'Iron Hooks'
  }
  
  setTitle = (title) => {
    this.setState({ title }, () => {
      document.title = title;
    })
  }

  componentDidMount() {
    document.title = this.state.title
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>UseEffect Hook</h1>
        <div>
          <h3>Title of the page: {title}</h3>
          <h5>Introduce the title you want to see:</h5>
          <input type="text" className="form-control" onChange={(e) => this.setTitle(e.target.value)} />
        </div>
      </div>
    );
  }
};

export default UseEffect;