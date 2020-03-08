import React from 'react';
import MainContainer from "./containers/MainContainer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import MainReducer from "./reducers/MainReducer";

const rootReducer = combineReducers({
    main: MainReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
}

export default App;
