import { Component } from 'react';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
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

  onAddContact = contactsData => {
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
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onInputChange = e => {
    this.setState({ filter: e.target.value.toLowerCase().trim() });
  };

  render () {
    const { contacts } = this.state;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Section title='Phonebook'>
            <ContactsForm onAddContact={this.onAddContact} />
            <Header title='Contacts' />
            <ContactsFilter name={this.name} onInputChange={this.onInputChange} />
          <ContactList
            contacts={contacts}
            onDeleteContact={this.onDeleteContact}
          />
          </Section>
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}
