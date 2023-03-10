// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
     let missionInfo =`<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`;

    this.document.getElementById("missionTarget").innerHTML = missionInfo;
   
}

function validateInput(testInput) {

    if (testInput === "")
    {
        return "Empty";

    }else if (isNaN(testInput))
    {
        return "Not a Number";
    }
    else
    {
        return "Is a Number";
    }

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    //let's check if all fields are entered
    
    let readyForTakeOff = true;

    if (validateInput(pilot) === "Empty" ||  validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty")
    {
        alert("All fields are requied!");   
        
        readyForTakeOff = false;
    }

    if (validateInput(pilot) === "Is a Number" ||  validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number")
    {
        alert("Make sure to enter valid information for each field!");  
        
        readyForTakeOff = false;
    }
    
    if (Number(fuelLevel)<10000)
    {

        this.document.getElementById("faultyItems").style.visibility = 'visible';

        this.document.getElementById("pilotStatus").innerHTML = pilot + " is ready for launch";

        this.document.getElementById("copilotStatus").innerHTML = copilot + " is ready for launch";

        this.document.getElementById("fuelStatus").innerHTML = "there is not enough fuel for the journey.";

        this.document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";

        this.document.getElementById("launchStatus").style.color = "red";

        readyForTakeOff = false

    }

    if (Number(cargoLevel)>10000)
    {

        this.document.getElementById("faultyItems").style.visibility = 'visible';

        this.document.getElementById("pilotStatus").innerHTML = pilot;

        this.document.getElementById("copilotStatus").innerHTML = copilot;

        this.document.getElementById("cargoStatus").innerHTML = "there is too much mass for the shuttle to take off.";

        this.document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";

        this.document.getElementById("launchStatus").style.color = "red";

        readyForTakeOff = false;

    }


    if (readyForTakeOff)
    {
        this.document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";

        this.document.getElementById("launchStatus").style.color = "green";

        this.document.getElementById("faultyItems").style.visibility = 'hidden';
    }


    return readyForTakeOff;

}

async function myFetch() {
    
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
          return response.json();
           
        });

    return planetsReturned;
}

function pickPlanet(planets) {

    let selectedPlanetIndex = Math.floor(Math.random() * planets.length)

    return planets[selectedPlanetIndex];

}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
