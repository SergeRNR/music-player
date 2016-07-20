import { EventEmitter } from 'events';
import api from 'utils/api';

let MediaStore = Object.assign({}, EventEmitter.prototype, {

  getMedia () {
    return api.ajax('/media/test.mp3', 'arraybuffer');
  }

});

export default MediaStore;
