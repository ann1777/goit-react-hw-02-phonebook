import { Component } from 'react';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import data from './contacts.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default class App extends Component {
  state = {
    contacts: data,
    name: '',
  };

  addContact = contactsData => {
    const newContact = {
      id: nanoid(),
      ...contactsData,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== id) };
    });
  };

  render () {
    const { contacts } = this.state;
    return (
      <>
      <ThemeProvider theme={theme}>
        <Section title="Phonebook">
            <Header title="Contacts" />
            <ContactsForm addContact={this.addContact} />
          </Section>
          <ContactList contacts={contacts} onDeleteContact={this.onDeleteContact} />
          <GlobalStyle />
      </ThemeProvider> 
      </>
    );
  }
}
