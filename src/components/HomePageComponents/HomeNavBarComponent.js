import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faUser, faCog, faEdit, faNewspaper, faSearch, faExclamationCircle, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { WEBAPP_NAME } from "../../constants";
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button, ButtonDropdown, ButtonGroup} from "reactstrap";
import "../../styles/Home.css"

class HomeNavBarComponent extends Component {
    state = {
        user: this.props.user
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.user !== null && prevState.user !== this.state.user) {
            this.setState({
                user: this.props.user
            })
        }
    }


    render() {
        const loggedIn = this.state.user !== null;
        return (
            <nav className="nav-bar home-nav-bar">
                <div className="home-logo">
                    <h1 className="home-web-name">
                        <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>
                        {WEBAPP_NAME}
                    </h1>
                </div>
                <div className="home-navbar-dropdowns">
                    <ButtonGroup>
                        {
                            loggedIn ?
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="info" caret>Profile</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.props.history.push("/profile")}>Your Profile</DropdownItem>
                                    <DropdownItem>Log Out</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                            :
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="info" caret>Sign In</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick = {() => this.props.history.push("/register")}>Register</DropdownItem>
                                    <DropdownItem onClick = {() => this.props.history.push("/login")}>Log In</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        }
                        <UncontrolledButtonDropdown>
                            <DropdownToggle color="info" caret>About</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>About the Site</DropdownItem>
                                <DropdownItem>Our Privacy Policy</DropdownItem>
                                <DropdownItem>About the Developers</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </ButtonGroup>
                </div>
            </nav>
        )
    }

}

export default HomeNavBarComponent;