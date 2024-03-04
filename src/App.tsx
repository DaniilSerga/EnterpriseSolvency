import React from 'react';
import {GeneralRouter} from 'navigation';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
        <GeneralRouter />
    </Provider>
  );
}

export default App;
