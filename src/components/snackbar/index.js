/* eslint-disable object-shorthand */
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider, withSnackbar } from 'notistack';

export default {
  success: function (msg) {
    this.toast(msg, 'success', 2000);
  },
  failure: function (msg) {
    this.toast(msg, 'error', 3000);
  },
  toast: function (msg, variant, autoHideDuration) {
    const Display = withSnackbar(({ message, enqueueSnackbar }) => {
      enqueueSnackbar(message, {
        variant,
        autoHideDuration,
        preventDuplicate: true,
      });
      return null;
    });
    const mountPoint = document.getElementById('snackbarHelper');
    ReactDOM.render(
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Display message={msg} variant={variant} />
      </SnackbarProvider>,
      mountPoint
    );
  },
};
