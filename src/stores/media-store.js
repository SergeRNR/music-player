import {Store} from 'flux/utils';
import dispatcher from 'dispatcher';
import api from 'utils/api';

class MediaStore extends Store {
  constructor () {
    super(dispatcher);
  }

  __onDispatch (action) {
    //
  }

  getMedia () {
    return api.ajax('/media/test.mp3', 'arraybuffer');
  }
}

export default new MediaStore();
