import React, { useState } from "react";

import { Button, Form } from 'semantic-ui-react'


const SomeForm = props => {
  // const [mainID, setMainID] = useState();
  // console.log("My ID inside the form", props.mainID)
  // console.log("My array inside the form", props.starobj)
  // const changeHandler = event => {
  //   //computed properties
  //   console.log(event.target.value);
  //   setMainID({ ...mainID, [event.target.name]: event.target.value });
  // };
  // const submitForm = event => {
  //   event.preventDefault();
  //   setMainID(event.target.value );
  // };
  
  // const firstItem = (arr, cb) => {
  //   return cb(arr[0]);
  // };

  // firstItem(props.starobj, function(first) {
  //   console.log(first)
  // });

  
  const options = [
    { key: 'Star1', text: 'Star 139250626', value: 1 },
    { key: 'Star2', text: 'Star 139281803', value: 2 },
    { key: 'Star3', text: 'Star 139285666', value: 3 },
    { key: 'Star4', text: 'Star 139285666', value: 4 },
    { key: 'Star5', text: 'Star 139285669', value: 5 },
    { key: 'Star6', text: 'Star 139300891', value: 6 },
    { key: 'Star7', text: 'Star 139300891', value: 7 },
    { key: 'Star8', text: 'Star 139370701', value: 8 },
    { key: 'Star9', text: 'Star 140609384', value: 9 },
    { key: 'Star10', text: 'Star 140659980', value: 10 }
  ]

  return (
    <Form >  
        <Form.Select
            fluid
            label='Choose your star'
            options={options}
            placeholder='Star name here'
            // onChange={changeHandler}
          />
      <Button type='submit'>Submit</Button>
      </Form>
  );
};

export default SomeForm;
