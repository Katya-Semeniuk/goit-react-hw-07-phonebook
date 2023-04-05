import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { visibleContacts } from '../../redux/selectors';
import { List, Item, Wrap, Info, ButtonDel } from './ContactsList.styled';

const ContactsList = () => {
  const filteredContacts = useSelector(visibleContacts);

  const dispatch = useDispatch();

  const onDeeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <Wrap>
            <Info>{name}: </Info>
            <Info>{phone}</Info>
            <ButtonDel onClick={() => onDeeleteContact(id)}>Delete</ButtonDel>
          </Wrap>
        </Item>
      ))}
    </List>
  );
};

export default ContactsList;
