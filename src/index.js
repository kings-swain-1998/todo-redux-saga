import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/main/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
