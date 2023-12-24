import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h2>
                Welcome to the Vending Machine!
            </h2>
            <p>
                I offer three pre-packaged high sodium/sugar digestibles, yum.
            </p>
            <br />
            <ul>
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/candybar">Candy Bar</Link>
                </li>
                <li>
                    <Link to="/gatorade">Sports Drink</Link>
                </li>
            </ul>
        </div>
    );
}

export default VendingMachine;
