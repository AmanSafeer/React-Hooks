import logo from './logo.svg';
import React, { useEffect, useId } from 'react';

import './App.css';
import Rules from "./Containers/Rules"
import UseLayoutEffects from "./Containers/UseLayoutEffects"
import UseDeferredValue from "./Containers/UseDeferredValue"
import UseReducer from "./Containers/UseReducer"
import UseId from "./Containers/UseId"
import CustomHooks from "./Containers/CustomHooks"

function App() {
  return (
    <UseLayoutEffects/>
    // <UseReducer />
    // <UseDeferredValue/>
    // <UseId />
    // <CustomHooks />
    // <Rules />

  );
}

export default App;
