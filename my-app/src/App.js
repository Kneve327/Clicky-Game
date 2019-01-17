import React from "react";
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import VillainCard from "./components/VillainCard";
import Footer from "./components/Footer";
import villains from "./villains.json";

// recursive function for it to randomize

function App() {
 return (
    <div>

        {/* <Navbar /> */}

        <Jumbotron />

        <Wrapper>

            <VillainCard 
            // name={villains[0].name}
            image={villains[0].image}
            />

            <VillainCard 
            // name={villains[1].name}
            image={villains[1].image}
            />

            <VillainCard 
            // name={villains[2].name}
            image={villains[2].image}
            />

            <VillainCard 
            // name={villains[3].name}
            image={villains[3].image}
            />

            <VillainCard 
            // name={villains[4].name}
            image={villains[4].image}
            />

            <VillainCard 
            // name={villains[5].name}
            image={villains[5].image}
            />

            <VillainCard 
            // name={villains[6].name}
            image={villains[6].image}
            />

            <VillainCard 
            // name={villains[7].name}
            image={villains[7].image}
            />

            <VillainCard 
            // name={villains[8].name}
            image={villains[8].image}
            />

            <VillainCard 
            // name={villains[9].name}
            image={villains[9].image}
            />

            <VillainCard 
            // name={villains[10].name}
            image={villains[10].image}
            />

            <VillainCard 
            // name={villains[11].name}
            image={villains[11].image}
            />

        </Wrapper>

        <Footer />

    </div>
 ) 
}

export default App;