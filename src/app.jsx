import React from 'react';
import {render} from 'react-dom';

import ProgressBar from './components/ProgressBar.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>Hello React!</div>
        <ProgressBar />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
