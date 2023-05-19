import { Component } from 'react';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addUser = userdata => {
    const newUser = {
      id: nanoid(),
      ...userdata,
    };
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
  };

  render () {
    return (
      <>
        <Section title='Phonebook'>
          <ContactsForm />
          <Header title='Contacts' />
          <ContactList />
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
