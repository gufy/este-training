import * as vetosActions from '../../common/vetos/actions';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import FirebaseLogin from '../firebase/Login.react';
import AddVeto from '../vetos/AddVeto.react';
import VetosList from '../vetos/List.react';
import focusInvalidField from '../lib/focusInvalidField';

class Page extends Component {

  render() {
    return (
      <div className="home-page">
        <Helmet title="Vetoapp" />
        <p>
          Rušíme zákony! Přihlaš se.
        </p>
        <FirebaseLogin />
        <hr/>
        <AddVeto />
        <hr/>
        <VetosList />
      </div>
    );
  }

}

export default Page;
