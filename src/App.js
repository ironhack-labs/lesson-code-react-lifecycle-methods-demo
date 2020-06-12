import React from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
    counterIsActive: false
  };

  handleCountChange = value => {
    this.setState({
      count: value
    });
  };

  toggleCounter = () => {
    this.setState(previousState => ({
      counterIsActive: !previousState.counterIsActive
    }));
  };

  componentDidCatch(error) {
    console.log('There was an uncaught error thrown in the component');
    console.log('Error! ', error);
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.toggleCounter}>Toggle</button>
        {this.state.counterIsActive && <Counter value={this.state.count} onCountChange={this.handleCountChange} />}
      </div>
    );
  }
}

export default App;
