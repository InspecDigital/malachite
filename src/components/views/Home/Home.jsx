import React, { Component } from 'react';
import { Form } from 'components/Form';

class Home extends Component {

  render() {

    const FORM = {
      title: 'malachite'
    };

    return (
      <div className="App">
        <Form form={FORM} />
      </div>
    );

  }

};

export { Home };
