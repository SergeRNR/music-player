import React from 'react';
import PlaybackStore from 'stores/playback-store';
import playbackActions from 'actions/playback-actions';

class ProgressBar extends React.Component {
  constructor (props) {
    super (props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    PlaybackStore.addListener(this.onChange);
  }

  componentWillUnmount () {
    PlaybackStore.remove(this.onChange);
  }

  onChange () {
    var playbackState = PlaybackStore.getState();
    //
  }

  render () {
    return (
      <div className="controls-bar">
        <button className="btn controls-btn controls-btn-play" onClick={playbackActions.play}></button>
        <button className="btn controls-btn controls-btn-stop" onClick={playbackActions.stop}></button>
      </div>
    );
  }
}

export default ProgressBar;
