import React from 'react';
import { Form, Row } from 'reactstrap';
import { FormData } from './FormData';
import InputContainer from './Input';

// import { FormContainer } from './styles';
export default function FormPage() {
  let answers = [];
  const CreateForm = FormData.properties.map(obj => {
    answers[obj.id] = '';
    return (
      <InputContainer obj={obj} value={input => (answers[obj.id] = input)} answers= {answers}/>
    );
  });
    console.log(answers);
  return (
    <Form>
      <Row>{CreateForm}</Row>
    </Form>
  );
}
