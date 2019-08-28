import React, { useState } from 'react';
import Joyride from 'react-joyride';

export class Tutorial extends React.Component {
  state = {
    steps: [
      {
        target: '.my-first-step',
        content: 'This is my awesome feature!',
      },
      {
        target: '.my-other-step',
        content: 'This another awesome feature!',
      },

    ]
  };

  render () {
    const { steps } = this.state;

    return (
      <div className="app">

        <Joyride
          steps={steps}

        />

      </div>
    );
  }
}
