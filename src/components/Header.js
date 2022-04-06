import React from "react";

let value = 10;

function Header() {
    return (
        <header className="App-header">
            <div id='counter-container'>
                <h4>Case Count:</h4>
                <span>{value}</span>
            </div>
            <button id="add-case-btn" className="button">New Case</button>
        </header>
    )
}

export default Header;