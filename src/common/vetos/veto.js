import {Record} from 'immutable';

const Veto = Record({
  lawNumber: '',
  reasonForCancelation: '',
  id: '',
  createdAt: null,
  creatorId: null,
  creatorDisplayName: ''
});

export default Veto;
