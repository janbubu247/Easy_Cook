import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches() {
    // State to manage the searches array and the input value
    const [searches, setSearches] = useState(['pizza']);
    const [inputValue, setInputValue] = useState("");

    // Function to handle input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Function to handle the form submission
    const handleSearch = () => {
        if (inputValue.trim()) {
            setSearches([inputValue, ...searches]);
            setInputValue("");
        }
    };

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (
                    <div key={index} style={{ animationDelay: index * 0.1 + "s" }} className="search-item">
                        {search}
                    </div>
                ))}
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search ..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="btn" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}
