import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// import the store from redux so we can use it
// the store IS redux

import { createStore } from 'redux';

// import the Provider component from react-redux, so that react and redux can talk to each other
// they talk through "connect", but the Provider component makes that happen
import { Provider } from 'react-redux';

// we need a master/root reducer to give to the store
import reducers from './reducers/index';


// make a store for redux to use. pass it reducers, which is the export of the rootReducer file
// the rootRedcucer is just all the little reducers return

const theStore = createStore(reducers);


// the Provider is the Component that makes connect work (connect is inside the containers).
// it takes a prop of StorageEvent, which is the reduxStore. 
// the redux store was made by createStore and giving it the rootReducer



ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

