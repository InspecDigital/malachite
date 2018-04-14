import React from 'react';
import { FormCreator } from './FormCreator';

class MalachiteForm extends FormCreator {

  render() {

    const FORM = (
      <div className="piac-form">
        Malachite default form
      </div>
    );

    return this.renderForm(FORM);

  }

}

export { MalachiteForm };
