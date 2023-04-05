import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactsList from '../ContactsList/ContactsList';
import Notification from '../notification/Notification';

import { Container, MainTitle, Title, Subtitle } from './ContactPage.styled';

const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(state => state.contacts.contacts.items);
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      {contacts.length > 0 && (
        <Subtitle>You have {contacts.length} contacts</Subtitle>
      )}
      <ContactForm />
      <Title>Contacts</Title>
      <ContactFilter />
      <ContactsList />
      <Notification />
    </Container>
  );
};

export default ContactPage;
