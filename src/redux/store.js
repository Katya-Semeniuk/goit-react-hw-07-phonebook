import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';
import notificationsReducer from '../components/notification/redux/notification.slice';
import NotificationsMiddleware from './notifications.middleware';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    notifications: notificationsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(NotificationsMiddleware),
});

export { store };
