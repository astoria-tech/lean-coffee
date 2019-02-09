import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const debugware = [];
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');

    debugware.push(createLogger({
        collapsed: true,
    }));
}

const history = createBrowserHistory()

export default function configureStore(initialState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        initialState,
        applyMiddleware(thunkMiddleware, routerMiddleware(history), ...debugware)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
