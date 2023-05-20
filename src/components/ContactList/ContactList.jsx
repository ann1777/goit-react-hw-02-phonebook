
import { UserItem, UserName, UserNumber, DeleteButton } from './ContactList.styled'
import PropTypes from 'prop-types';

export const ContactList = ({contacts, onDelete}) => {
  const handleDelete = id => {
    onDelete(id);
  };

    return(
        <>
        {contacts.map(({contact}) => {
              <UserItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
              display="flex"
              justifyContent="space-around"
              textAlign="left"
              as="li"
              >
                <UserName>Name: {contact.name}</UserName>
                <UserNumber>Number: {contact.number}</UserNumber>
                <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton>
              </UserItem>
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
    })
  ).isRequired, 
  onDelete: PropTypes.func.isRequired,
};