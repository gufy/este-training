import * as vetosActions from '../../common/vetos/actions';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import focusInvalidField from '../lib/focusInvalidField';

class List extends Component {

  static propTypes = {
  //  vetoFormFieldChange: PropTypes.func.isRequired,
  //  msg: PropTypes.object.isRequired,
  //  newVetoForm: PropTypes.object.isRequired,
  //  addVeto: PropTypes.func.isRequired,
  //  newVetoFormError: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {msg} = this.props;

    return (
      <div className="vetos-list">
        <h2>Navrhujeme ke zrušení</h2>
        Coming soon...
      </div>
    );
  }

}

List = connect(state => ({
  msg: state.intl.msg.home,
}), vetosActions)(List);

export default List;
