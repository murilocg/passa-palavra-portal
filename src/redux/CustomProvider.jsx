import React from 'react';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const enhancedMiddewares = applyMiddleware(thunk);
const store = createStore(reducer, {}, enhancedMiddewares);

const CustomProvider = props => <Provider store={store}>{props.children}</Provider>;

export default CustomProvider;
