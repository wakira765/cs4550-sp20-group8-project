import React from "react"

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
    )
};

export default NavBarComponent
