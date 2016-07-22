import dispatcher from 'dispatcher';
import actionsTypes from 'actions/action-types';

export default {
  play (time) {
    dispatcher.dispatch({
      type: actionsTypes.PLAYBACK_PLAY
    });
  },

  pause (time) {
    dispatcher.dispatch({
      type: actionsTypes.PLAYBACK_PAUSE
    });
  },

  stop (time) {
    dispatcher.dispatch({
      type: actionsTypes.PLAYBACK_STOP
    });
  }
};
