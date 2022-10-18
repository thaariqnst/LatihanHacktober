let object = {
    key1 : "value1",
    key2 : 2,
    key3 : "value3"
};

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};
//!                      how to get values from object properties
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

const plane = {
    name : "Millenium Falcon",
    maxSpeed : 1200,
    "primary color" : "Light Gray",
    "secondary color" : "Magenta",
    manufacturer: "Corellian Engineering Corporation",
};
//!          also get values from object property
console.log(plane["primary color"]);

//! how to modify property
//! keep in mind that modifying values is different from re-initializing values
plane.color = "Glossy red";
plane["maxSpeed"] = 1300;
console.log(plane);

//! adding a new property to an object
plane.class = "Light Freighter"
console.log(plane)

//! deleting a property
delete plane.manufacturer;
console.log(plane)
