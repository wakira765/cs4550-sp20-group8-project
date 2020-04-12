import React from "react"
import {Link} from "react-router-dom";

const NavBarComponent = ({handleSearchTermChange, searchTerm}) => {
    return (
        <nav className="nav-bar">
            <label className="search-bar-label" htmlFor="nav-search-bar">
                Search for information here:
            </label>
            <input id="nav-search-bar"
                   className="nav-search-bar"
                   placeholder="Search Here"
                   value={searchTerm}
                   onChange={(e) => handleSearchTermChange(e.target.value)}
            />
            <div className="cta-container">
                <div className="button-container">
                    <Link className="search-button find-name-button" to={`/search/drug_name/${searchTerm}`}>Find Drug</Link>
                    <Link className="search-button find-disease-button" to={`/search/disease_name/${searchTerm}`}>Find Disease</Link>
                    <Link className="search-button find-side-button" to={`/search/side_effect/${searchTerm}`}>Get Side Effects</Link>
                </div>
            </div>
        </nav>
    )
};

export default NavBarComponent