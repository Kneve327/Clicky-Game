import React from "react";
import "./style.css";

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div className="jumbotronContainer">
                        <p class="display-4">Clicky Game</p>
                        {/* <p class="lead">Click on an image to earn points, but don't click on any more than once!</p> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;