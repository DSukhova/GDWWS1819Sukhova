const fs = require('fs');

const m =(require './Node/citiesmodule.js')

const JSONReader = require('/Node/citiesmodule.js');

JSONReader.readJSON('cities.json', err, result) =>
{
    console.log(result)
};

let city [] = new Object();
city.add = { id: 1, stadt: "Berlin", einwohnerzahl: 3613000, bundesland: "Berlin" }; // korrektieren
let city2 = { id: 2, stadt: "Hamburg", einwohnerzahl: 1830000, bundesland: "Hamburg" };
let city3 = { id: 3, stadt: "München", einwohnerzahl: 1464000, bundesland: "Bayern" };
let city4 = { id: 4, stadt: "Köln", einwohnerzahl: 1080000, bundesland: "Nordrhein- Westfalen" };
let city5 = { id: 5, stadt: "Frankfurt am Main", einwohnerzahl: 7460000, bundesland: "Hessen" };
let city6 = { id: 6, stadt: "Stuttgart", einwohnerzahl: 628000, bundesland: "Baden-Würtemberg" };
let city7 = { id: 7, stadt: "Düsseldorf", einwohnerzahl: 613000, bundesland: "Nordrhein-Westfalen" };
let city8 = { id: 8, stadt: "Dortmund", einwohnerzahl: 585000, bundesland: "Nordrhein-Westfalen" };
let city9 = { id: 9, stadt: "Essen", einwohnerzahl: 583000, bundesland: "Noedrhein-Westfalen" };
let city10 = { id: 10, stadt: "Leipzig", einwohnerzahl: 571000, bundesland: "Sachsen" };

let json =JSON.stringify(cities);
let citiesArray =JSON.parse(json);

citiesArray.push("Berlin");

console.log(citiesArray);

function findCity  (){ // korrektieren

}

function  addCity() { // korrektieren

}

const readJSON =("./Node/cities.json", callback) => {
    fs.readFile(path,'utf8',callback);
};

const writeJSON = ("./Node/cities.json", callback) =>{
    fs.writeFIle(path, 'utf8', callback);
};

module.exports ={
    readJSON
};

try{
    JSONReader.readJSON('cities.json', err, result)=>{
        console.log(result);
    };
    catch (error){
        console.log(error);
    }

}

const readJSON =('/Node/cities.json', callback) => {
    JSONReader.readJSON('cities.json', err, result)=>
 if  (err)
    callback(err);
     else
          callback(null,result)
};

let json = readJSON('cities.json', err, result) =>{
    if(err){
        return;
    }
    try {
        let data = JSON.parse(result);

    }
    catch (error) {

    }
};