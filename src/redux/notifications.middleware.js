import { addNotification } from 'components/notification/redux/notification.slice';
import { addContact, deleteContact } from 'redux/contactsOperations';

const NotificationsMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    const contacts = getState().contacts.contacts.items;

    //   addContact.match(action);
    if (addContact.type === action.type) {
      next(action);
      dispatch(addNotification(`Friend ${action.payload.name} was added`));
      return;
    }

    if (deleteContact.type === action.type) {
      const contactToDelete = contacts.find(
        contact => contact.id === action.paload
      );
      dispatch(addNotification(`Friend ${contactToDelete} was deleted`));
    }

    next(action);
  };

export default NotificationsMiddleware;
