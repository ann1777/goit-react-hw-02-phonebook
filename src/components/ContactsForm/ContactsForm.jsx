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
  name: '',
  number: ''
};

export class ContactsForm extends React.Component {
  state = INITIAL_STATE;

  handleChangeInput = ({ target: { name, value } }) =>{
    this.setState({[name]: value});
  }

  onSubmit = e => {
		e.preventDefault()

		console.log('Name користувача введено')
		console.log(this.state)
    this.props.addUseer(this.state);
    this.setState(INITIAL_STATE);
	}

  render() {
    const { name, number } = this.state;

    return (
  
        <InputForm onSubmit={this.onSubmit}>
             <FormField htmlFor='name'>
                 <LabelWrapper>Name: 
                  <input name="name" value={name} onChange={this.handleChange} />
                 </LabelWrapper>
                 <FieldFormik
                     type="text"
                     name="name"
                     value={name}
                     onChange={this.handleChangeInput}
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

export default ContactsForm;
