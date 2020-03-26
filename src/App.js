import React from 'react';
import MainContainer from "./containers/MainContainer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import MainReducer from "./reducers/MainReducer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DrugComponent from "./components/DrugComponent";
import DrugReducer from "./reducers/DrugReducer";

const rootReducer = combineReducers({
    main: MainReducer,
    drug: DrugReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Route path="/"
                   exact={true}
                   component={MainContainer}
            />
            <Route path="/:drugName"
                   exact={true}
                   render={(props) =>
                       <DrugComponent
                           {...props}
                           drugName={props.match.params.drugName}
                       />
                   }
            />
        </Router>
    </Provider>
  );
}

export default App;
