import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './containers/App';
import todoReducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(todoReducers);

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.querySelector('#root')
);
