import { nanoid } from 'nanoid';
import { List, Button, Item } from './ContactList.styled';

export const Contactlist = ({ contacts, filter, handleDelete }) => {
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filterName.map(contact => (
        <Item key={nanoid()}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            aria-label="Close"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
