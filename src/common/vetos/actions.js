import Veto from './veto';

export const VETO_FORM_FIELD_CHANGE = 'VETO_FORM_FIELD_CHANGE';
export const ADD_VETO_SUCCESS = 'ADD_VETO_SUCCESS';
export const ADD_VETO_ERROR = 'ADD_VETO_ERROR';
export const ADD_VETO_START = 'ADD_VETO_START';

export function addVeto(fields) {
  return ({firebase, getUid, TIMESTAMP, validate, store: {getState}}) => {
    const getPromise = async () => {
      await validate(fields)
        .prop('lawNumber').required()
        .prop('reasonForCancelation').required()
        .promise;

      const viewer = getState().users.viewer;

      const veto = new Veto({
        lawNumber: fields.lawNumber,
        reasonForCancelation: fields.reasonForCancelation,
        id: getUid(),
        createdAt: TIMESTAMP, // firebase server timestamp
        creatorId: viewer.id,
        creatorDisplayName: viewer.displayName
      });

      await firebase.child('vetos').child(veto.id).set(veto.toJS());
    };

    return {
      type: 'ADD_VETO',
      payload: {
        promise: getPromise()
      }
    };
  };
}

// action creator
// TODO: Refactor
export function vetoFormFieldChange({target: {name, value}}) {
  return {
    type: VETO_FORM_FIELD_CHANGE,
    payload: {name, value}
  };
}
