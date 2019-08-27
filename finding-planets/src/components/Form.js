import React, { useState } from "react";

import { Button, Form } from 'semantic-ui-react'


const SomeForm = props => {

  return (
    <Form>
        <Form.Field>
            <label htmlFor="role">Choose your star</label>
            <input
                type="text"
                name="star"
                placeholder="Some star name here"
            />
        </Form.Field>       
      <Button type='submit'>Submit</Button>
      </Form>
  );
};

export default SomeForm;
