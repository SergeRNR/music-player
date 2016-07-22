import {ReduceStore} from 'flux/utils';
import dispatcher from 'dispatcher';
import actionsTypes from 'actions/action-types';
import api from 'utils/api';

class PlaybackStore extends ReduceStore {
  constructor () {
    super(dispatcher);
  }

  getInitialState () {
    this.ac = new (window.AudioContext || window.webkitAudioContext)();

    return {
      ac: this.ac,
      current: 'stop',
      playing: false,
      paused: false,
      stopped: true
    };
  }

  reduce (state, action) {
    switch (action.type) {
      case actionsTypes.PLAYBACK_PLAY:
        if (state.action !== 'playing') {
          state = Object.assign({}, state);
          state.action = 'playing';
          this.play();
        }
        break;

      case actionsTypes.PLAYBACK_PAUSE:
        break;

      case actionsTypes.PLAYBACK_STOP:
        state = Object.assign({}, state);
        state.action = 'stop';
        this.stop();
        break;
    }

    return state;
  }

  load (url) {
    return api.ajax('/media/test.mp3', 'arraybuffer')
            .then(this.decode.bind(this))
            .then(this.createSource.bind(this));
  }

  decode (audioData) {
    return this.ac.decodeAudioData(audioData);
  }

  createSource (buffer) {
    this.source = this.ac.createBufferSource();
    this.source.buffer = buffer;
    this.source.connect(this.ac.destination);
  }

  play () {
    this.source.start();
    this.onPlaying();
  }

  pause () {

  }

  stop () {
    this.source.stop();
    cancelAnimationFrame(this.requestAnimationFrameID);
  }

  onPlaying () {
    this.requestAnimationFrameID = requestAnimationFrame(this.onPlaying.bind(this));
    this.__emitChange();
  }
}

export default new PlaybackStore();
