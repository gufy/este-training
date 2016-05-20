import * as actions from '../vetos/actions';
import {Record} from 'immutable';

const VetoForm = Record({
  lawNumber: '',
  reasonForCancelation: ''
});
const InitialState = Record({
  newVetoForm: new VetoForm(),
  newVetoFormError: null
});
const initialState = new InitialState;

export default function vetosReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState;

  switch (action.type) {

    case actions.VETO_FORM_FIELD_CHANGE: {
      const {name, value} = action.payload;
      return state.setIn(['newVetoForm', name], value);
    }

    case actions.ADD_VETO_ERROR: {
      return state.set('newVetoFormError', action.payload);
    }

    case actions.ADD_VETO_SUCCESS: {
      return state.merge({
        newVetoForm: new VetoForm(),
        newVetoFormError: null
      });
    }
  }

  return state;
}
