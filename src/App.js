import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { SnackbarProvider } from 'notistack';
import history from './services/history';
import { store, persistor } from './store';

import Routes from './routes';

const App = () => {
  return (
    <SnackbarProvider maxSnack={1} preventDuplicate>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
