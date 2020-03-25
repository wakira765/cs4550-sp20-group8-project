import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBarComponent = ({findDrugsByName, findDrugsByDisease, getDrugSideEffects, handleSearchTermChange, searchTerm}) => {
    return (

        <nav className="nav-bar">
            <label className="search-bar-label" htmlFor="nav-search-bar">
                Search for information here:
            </label>
            <input id="nav-search-bar"
                   className="nav-search-bar"
                   placeholder="Search Here"
                   onChange={(e) => handleSearchTermChange(e.target.value)}
            />
            <div className="cta-container">
                <div className="button-container">
                    <button className="find-name-button"
                            type="submit"
                            onClick={() => findDrugsByName(searchTerm)}>
                        Find Drug
                    </button>
                    <button className="find-disease-button"
                            type="submit"
                            onClick={() => findDrugsByDisease(searchTerm)}>
                        Find Treatments
                    </button>
                    <button className="find-side-effects-button"
                            type="submit"
                            onClick={() => getDrugSideEffects(searchTerm)}>
                        Get Side effects
                    </button>
                </div>
            </div>
        </nav>
//        <div>
//            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-info px-0">
//                <button className="btn btn-info mx-sm-2" type="button">
//                    <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
//                </button>
//                <input className="form-control"
//                       placeholder="New Course Title"
//                       title="Default name will be applied if no course name is chosen"
//                       onChange={(e) => handleSearchTermChange(e.target.value)}
//                />
//                <button className="btn btn-info mx-sm-2"
//                        type="submit"
//                        onClick={() => findDrugsByName(searchTerm)}>
//                    Find Drug
//                </button>
//                <button className="btn btn-info mx-sm-2"
//                        type="submit"
//                        onClick={() => findDrugsByDisease(searchTerm)}>
//                    Find Treatments
//                </button>
//                <button className="btn btn-info mx-sm-2"
//                        type="submit"
//                        onClick={() => getDrugSideEffects(searchTerm)}>
//                    Get Side effects
//                </button>
//            </nav>
//        </div>
    )
};

export default NavBarComponent
