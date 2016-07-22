import React from 'react';
import {render} from 'react-dom';

// components
import ProgressBar from 'components/progress-bar';
import Controls from 'components/controls';
// stores
import PlaybackStore from 'stores/playback-store';
// actions
import playbackActions from 'actions/playback-actions';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      action: 'initializing'
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    PlaybackStore.addListener(this.onChange);

    PlaybackStore.load().then(() => {
      this.setState({
        action: 'loaded'
      });
    });
  }

  onChange () {
    //
  }

  render () {
    return (
      <div>
        <div>Music player</div>
        <div>State: {this.state.action}</div>
        <ProgressBar hey={this.state.action} />
        <Controls />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
