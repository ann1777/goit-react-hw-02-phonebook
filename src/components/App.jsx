import { Component } from 'react';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';

export default class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm/>
          <Header title="Contacts" />
          <ContactList
            contacts={visibleContacts}
          />
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
