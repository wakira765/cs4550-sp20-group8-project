import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faUser, faPrescription, faInfoCircle, faInfo} from "@fortawesome/free-solid-svg-icons";
import { WEBAPP_NAME } from "../../constants";
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button, ButtonDropdown, ButtonGroup} from "reactstrap";
import "../../styles/Home.css"

class HomeNavBarComponent extends Component {
    state = {
        user: this.props.user
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.user !== null && prevState.user.username !== this.state.user.username) {
            this.setState({
                user: this.props.user
            })
        }
    }


    render() {
        const loggedIn = this.state.user.username !== '';
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
                        <Button color="info">
                            <FontAwesomeIcon icon={faPrescription} size="2x" onClick={() => this.props.history.push("/search")}></FontAwesomeIcon>
                        </Button>
                        {
                            loggedIn ?
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="info" caret><FontAwesomeIcon size="2x" icon={faUser}></FontAwesomeIcon></DropdownToggle>
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
                            <DropdownToggle color="info" caret>
                                <FontAwesomeIcon icon={faInfoCircle} size="2x"></FontAwesomeIcon>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick = {() => this.props.history.push("/about")}>
                                    About the Site
                                </DropdownItem>
                                <DropdownItem onClick = {() => this.props.history.push("/privacy")}>
                                    Our Privacy Policy
                                </DropdownItem>
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