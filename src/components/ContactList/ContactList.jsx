
import { UserItem, UserName, UserNumber, DeleteButton } from './ContactList.styled'
import PropTypes from 'prop-types';

export const ContactList = ({contacts, onDeleteContact}) => {
    return(
        <>
        {contacts.map(({id, name, number }) => {
            return (
              <UserItem
              key={id}
              mb={3}
              display="flex"
              justifyContent="space-around"
              textAlign="left"
              as="li"
              >
                <UserName>Name: {name}</UserName>
                <UserNumber>Number: {number}</UserNumber>
                <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
              </UserItem>
            )
          })}
        </>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };