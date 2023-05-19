import React from 'react';
import PropTypes from 'prop-types';

import {
    InputForm,
    FormField,
    FieldFormik,
    StyledButton,
    LabelWrapper,
} from './ContactsForm.styled';

const INITIAL_STATE ={
  contacts: [],
  name: ''
}

export class ContactsForm extends React.Component {
  state = INITIAL_STATE;

  handleChangeInput = ({ target: { name, value } }) =>{
    this.setState({[name]: value});
  }

  onSubmit = e => {
		e.preventDefault()

		console.log('Name користувача введено')
		console.log(this.state)
		this.setState(INITIAL_STATE)
    this.state.addUseer([...this.state]);
    this.setState.name({name: '', email: ''});
	}

  render() {
    const { name } = this.state;

    return (
        <InputForm onSubmit={this.onSubmit}>
             <FormField htmlFor='name'>
                 <LabelWrapper>Name: </LabelWrapper>
                 <FieldFormik
                     type="text"
                     name="name"
                     value={name}
                     onchange={this.handleChangeInput}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                 />
             </FormField>
             <StyledButton type="submit">
                AddContact
             </StyledButton>   
        </InputForm> 
  )} 
};

ContactsForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
