import { combineReducers } from 'redux';

import contacts from './contacts';
import contactScreen from './contactScreen';
import homeScreen from './homeScreen';

const rootReducer = combineReducers({
  contacts,
  contactScreen,
  homeScreen,
});

export default rootReducer;