import React from 'react';
import {render} from 'react-dom';

import ProgressBar from 'components/progress-bar';
import MediaStore from 'stores/media-store';

class App extends React.Component {
  render () {
    MediaStore.getMedia().then((response) => {
      let audioContext = window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      let source = audioContext.createBufferSource();
      audioContext.decodeAudioData(response).then((buffer) => {
        source.buffer = buffer;
        source.connect(audioContext.destination);
        // source.start();
      });
    });

    return (
      <div>
        <div>Hello React!</div>
        <ProgressBar />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
