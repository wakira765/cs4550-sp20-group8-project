import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBarComponent = ({findDrugsByName, handleSearchTermChange, searchTerm}) => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-info px-0">
                <button className="btn btn-info mx-sm-2" type="button">
                    <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
                </button>
                <input className="form-control"
                       placeholder="New Course Title"
                       title="Default name will be applied if no course name is chosen"
                       onChange={(e) => handleSearchTermChange(e.target.value)}
                />
                <button className="btn btn-info mx-sm-2"
                        type="submit"
                        onClick={() => findDrugsByName(searchTerm)}>
                    Search
                </button>
            </nav>
        </div>
    )
};

export default NavBarComponent