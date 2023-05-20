import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';

import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
  LabelWrapper,
  ErrorMessage,
} from './ContactsForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactsForm = ({ onAddContact }) => {
  return (
    <Formik
      INITIAL_STATE={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ id: nanoid(), ...values });
        resetForm = this.setState(INITIAL_STATE);
      }}
      validationSchema={schema}
    >
      <Form htmlFor='name'>
        <FormField htmlFor='name'>
          <LabelWrapper>
            <BsPersonFill /> Name:
          </LabelWrapper>
          <FieldFormik
            type='text'
            name='name'
            value={this.name}
            onAddContact={this.onAddContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name='name' component='span' />
        </FormField>
        <FormField htmlFor='number'>
          <LabelWrapper>
            <BsFillTelephoneFill /> Number
          </LabelWrapper>
          <FieldFormik
            type='tel'
            name='number'
            value={this.number}
            onAddContact={this.onAddContact}
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
          <ErrorMessage name='number' component='span' />
        </FormField>
        <StyledButton type='submit'>AddContact</StyledButton>
      </Form>
    </Formik>
  );
};

ContactsForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
