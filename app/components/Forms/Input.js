import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
    };
  }

  handleChange = () =>{
      console.log(this.props.answers);
  }

  render() {
    const obj = { ...this.props.obj };
    let InputTextComponent = '';
    if (
      obj.type === 'text' ||
      obj.type === 'password' ||
      obj.type === 'textarea' ||
      obj.type === 'email'
    ) {
      InputTextComponent = (
        <div className={`col-md-${obj.width}`} key={obj.id}>
          <FormGroup>
            <Label for={obj.id}>{obj.label}</Label>
            <Input
              type={obj.type}
              name={obj.label}
              id={obj.id}
              ref={this.props.value}
              placeholder={obj.inputValue === '' ? obj.placeholder : ''}
              onChange = {this.handleChange}
              //value={obj.inputValue !== '' ? obj.inputValue : }
            />
          </FormGroup>
        </div>
      );
    } else if (obj.type === 'checkbox') {
      InputTextComponent = (
        <div className={`col-md-${obj.width}`} key={obj.id}>
          <label>{obj.label}</label>
          {obj.items.map(item => (
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" ref={this.props.value}/> {item}
              </Label>
            </FormGroup>
          ))}
        </div>
      );
    } else if (obj.type === 'dropdown') {
      InputTextComponent = (
        <div className={`col-md-${obj.width}`} key={obj.id}>
          <label>{obj.label}</label>
              <Input type="select" ref={this.props.value}>
            {obj.items.map(item => (
              <option>{item}</option>
            ))}
          </Input>
        </div>
      );
    }
    return <React.Fragment>{InputTextComponent}</React.Fragment>;
  }
}
