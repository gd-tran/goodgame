/* eslint-disable max-classes-per-file */
import React from 'react';
import MainContainer from './MainContainer.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ result: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const dashboardStyle = {
      height: '100%',
      width: '100%',
      background: '#DB2955',
    };

    return (
      <div style={dashboardStyle}>
        <h1>Welcome to GoodGame Reviews</h1>
        <MainContainer
          result={this.state.result}
        />
      </div>
    );
  }
}

export default Dashboard;
