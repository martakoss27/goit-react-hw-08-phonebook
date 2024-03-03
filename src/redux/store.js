import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './reducers/auth/authSlice';
import { filterReducer } from './reducers/contacts/filterSlice';
import { contactsReducer } from './reducers/contacts/contactsSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const storePersist = persistStore(store);

export { store, storePersist };
