import axios from 'axios';
axios.defaults.baseURL = 'https://642b22b4208dfe254712bcd8.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', {
    name: newContact.name,
    number: newContact.number,
  });
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data.id;
}
