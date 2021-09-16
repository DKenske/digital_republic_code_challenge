import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  return persistReducer(
    {
      key: 'digital_republic_code_chalenge',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
};
