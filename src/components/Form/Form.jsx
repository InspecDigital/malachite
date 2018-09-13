/**
 * PIAC form component - generate forms for specific action item types
 */

import React, { Component } from 'react';
import { MalachiteForm } from './MalachiteForm';
import { PROPTYPES, DEFAULT_PROPS } from './config';

class Form extends Component {

  getForm = () => {

    switch (this.props.form.title.toLowerCase()) {
      case 'malachite':
        return (<MalachiteForm {...this.props} />);
      default:
        return (<MalachiteForm {...this.props} />);
    }

  }

  render() {

    return this.getForm();

  }

}

Form.propTypes = PROPTYPES;
Form.defaultProps = DEFAULT_PROPS;

export { Form };
