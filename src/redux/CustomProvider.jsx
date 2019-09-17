import React from 'react'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(reducer)

const CustomProvider = (props) => <Provider store={store}>{props.children}</Provider>

export default CustomProvider