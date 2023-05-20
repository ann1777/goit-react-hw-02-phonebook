import { Component } from 'react';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import data from './contacts.json';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { theme } from './theme';

export default class App extends Component {
  state = {
    contacts: data,
    filter: '',
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

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  render () {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <ThemeProvider theme={theme}>
          <Section>
          <Title title='Phonebook' />
            <ContactsForm onAddContact={this.onAddContact} />
            <Title title='Contacts' />
            <ContactsFilter value={filter} onInputChange={this.onInputChange} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.onDeleteContact}
          />
          </Section>
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}
