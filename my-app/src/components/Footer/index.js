import React from "react";
import "./style.css";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer class="footer mt-auto py-3">
                    <div class="container">
                        <span className="footerStuff">Clicky Game</span>
                        <img alt="react" src="images/React.png" className="footerImage"></img>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;