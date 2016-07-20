import React from 'react';

class ProgressBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      progress: 0
    };
    this.onProgress = this.onProgress.bind(this);
  }

  onProgress () {
    let progress = 100;
    console.log(progress);
    this.setState({
      progress: progress
    });
  }

  render () {
    return (
      <div>
        Progress: {this.state.progress}
        <button onClick={this.onProgress}>Make progress</button>
      </div>
    );
  }
}

export default ProgressBar;
