let actionTypes = {
  PLAYBACK_PLAY: null,
  PLAYBACK_PAUSE: null,
  PLAYBACK_STOP: null
};

for (let k in actionTypes) {
  actionTypes[k] = k;
}

export default actionTypes;
