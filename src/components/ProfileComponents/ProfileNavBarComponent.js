import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules, faPrescription, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { WEBAPP_NAME } from "../../constants";
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button, ButtonGroup} from "reactstrap";
import "../../styles/Profile.css";

class ProfileNavBarComponent extends Component {

    render() {
        return(
            <nav className="nav-bar profile-nav-bar">
                <div className="profile-logo">
                    <h2 className="profile-web-name">
                        <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>
                        {WEBAPP_NAME}
                    </h2>
                </div>
                <div className="profile-navbar-dropdowns">
                    <ButtonGroup>
                        <Button color="info">
                            <FontAwesomeIcon icon={faPrescription} size="2x" onClick={() => this.props.history.push("/search")}></FontAwesomeIcon>
                        </Button>
                        <Button color="info">
                            <a className="to-home" href="/home/news_feed">Home</a>
                        </Button>
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

export default ProfileNavBarComponent;