import React from "react";
import "./style.css";


class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar sticky-top">
                <ul>
                    <li className="nav-item">Clicky Game</li>

                    {/* On click has to change what this says */}
                    <li className="nav-item">Click an image to begin!</li>

                    <li className="nav-item">Score: 0 | Top Score: 0</li>

                </ul>
            </nav>
        );
      }
}

export default Navbar;


// export default Navbar;
