import { createStore, applyMiddleware, compose } from 'redux';
import myReducers from '../reducers';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = () => {
    const middleware = [thunk];
    const enhancers = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(myReducers, enhancers);
    return store;
}
export default configStore;