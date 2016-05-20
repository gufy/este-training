import * as vetosActions from '../../common/vetos/actions';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import focusInvalidField from '../lib/focusInvalidField';

class AddVeto extends Component {

  static propTypes = {
    vetoFormFieldChange: PropTypes.func.isRequired,
    msg: PropTypes.object.isRequired,
    newVetoForm: PropTypes.object.isRequired,
    addVeto: PropTypes.func.isRequired,
    newVetoFormError: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const {addVeto, newVetoForm} = this.props;
    const result = addVeto(newVetoForm.toJS()).payload.promise;
    if (result.error) {
      console.log(result.error);
      focusInvalidField(this, result.payload);
    } else {

    }
  }

  render() {
    const {msg, vetoFormFieldChange, newVetoForm, newVetoFormError} = this.props;

    return (
      <form onSubmit={this.onFormSubmit}>
        <legend>
          Navrhuji ke zrušení tento zákon
        </legend>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            maxLength="10"
            placeholder="Číslo zákona"
            value={newVetoForm.lawNumber}
            name="lawNumber"
            onChange={vetoFormFieldChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control"
            placeholder="Důvod pro zrušení"
            value={newVetoForm.reasonForCancelation}
            name="reasonForCancelation"
            onChange={vetoFormFieldChange}
          />
        </fieldset>
        {newVetoFormError &&
        <p className="error-message alert alert-danger">{newVetoFormError.message}</p>
        }
        <button className="btn btn-lg btn-primary">Odeslat ihned!</button>
      </form>
    );
  }

}

AddVeto = connect(state => ({
  msg: state.intl.msg.home,
  newVetoForm: state.vetos.newVetoForm,
  newVetoFormError: state.vetos.newVetoFormError
}), vetosActions)(AddVeto);

export default AddVeto;
