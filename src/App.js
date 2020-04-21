import React from 'react';
import MainContainer from "./containers/MainContainer";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import HomeContainer from "./containers/HomeContainer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import MainReducer from "./reducers/MainReducer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DrugComponent from "./components/DrugComponent";
import DrugReducer from "./reducers/DrugReducer";

import AboutContainer from "./containers/AboutContainer";
import PrivacyContainer from "./containers/PrivacyContainer"

import ProfileContainer from './containers/ProfileContainer';
import { findUserProfile } from "./services/UserService"

import { DISPLAY_NEWS, DISPLAY_LANDING_PAGE } from "./constants";

const rootReducer = combineReducers({
    main: MainReducer,
    drug: DrugReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Route path="/search"
                   exact={true}
                   component={MainContainer}
            />
            <Route path="/search/drug_name/:drugName"
                   exact={true}
                   render={(props) =>
                       <MainContainer
                           {...props}
                           search={props.match.params.drugName}
                           searchByName={true}
                           searchByDisease={false}
                           searchSideEffects={false}
                       />
                   }
            />
            <Route path="/search/side_effect/:drugName"
                   exact={true}
                   render={(props) =>
                       <MainContainer
                           {...props}
                           search={props.match.params.drugName}
                           searchByName={false}
                           searchByDisease={false}
                           searchSideEffects={true}
                       />
                   }
            />
            <Route path="/search/disease_name/:disease"
                   exact={true}
                   render={(props) =>
                       <MainContainer
                           {...props}
                           search={props.match.params.disease}
                           searchByName={false}
                           searchByDisease={true}
                           searchSideEffects={false}
                       />
                   }
            />
            <Route path="/drugs/:drugName"
                   exact={true}
                   render={(props) =>
                       <DrugComponent
                           {...props}
                           drugName={props.match.params.drugName}
                       />
                   }
            />
            <Route path="/login"
                   exact={true}
                   component={LoginContainer}
            />
            <Route path="/register"
                   exact={true}
                   render={(props) =>
                      <RegisterContainer
                          {...props}
                      />
                   }
            />
            <Route path={["/landing_page"]}
                   exact={true}
                   render={(props) => <HomeContainer {...props} display={DISPLAY_LANDING_PAGE}/>}
            />
            <Route path={["/", "/home", "/home/news_feed"]}
                   exact={true}
                   render={(props) => <HomeContainer {...props} display={DISPLAY_NEWS}/>}
            />
            <Route path="/about"
                   exact={true}
                   render={(props) => <AboutContainer {...props}/>}
            />
            <Route path={["/profile", "/profile/:userName"]}
                   exact={true}
                   render={(props) => <ProfileContainer {...props} user={findUserProfile()}/>}
            ></Route>
            <Route path="/privacy"
                   exact={true}
                   render={(props) => <PrivacyContainer {...props} />}
            ></Route>
        </Router>
    </Provider>
  );
}

export default App;
