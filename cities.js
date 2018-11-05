const m =require ('./Node/citiesmodule.js');

const JSONReader = require('/Node/citiesmodule.js');

JSONReader.readJSON('cities.json', (err, result) =>
{
    console.log(result);
});
const cities = [];
let json =JSON.stringify(cities);
let citiesArray =JSON.parse(json);

citiesArray.push("Berlin");

console.log(citiesArray);

function findCity  (){

}

function  addCity() {
    
}

