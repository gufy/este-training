import {combineReducers} from 'redux';
import {reduxFields} from '../lib/redux-fields';

import auth from '../auth/reducer';
import device from '../device/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import ui from '../ui/reducer';
import users from '../users/reducer';
import vetos from '../vetos/reducer';

const appReducer = combineReducers({
  auth,
  device,
  intl,
  reduxFields,
  todos,
  ui,
  users,
  vetos
});

export default appReducer;
