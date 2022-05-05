var firstName = "John";
var lastName = "Doe";
var age = 35;
var fullName = firstName + " " + lastName;
var fullName2 = `Meu nome é ${firstName} ${lastName} e tenho ${age} anos.`;
// console.log(fullName2);
var uri = "https://www.google.com.br/";
var uri2 = `${uri}search?q=${fullName}`;

var fullNameUpperCase = fullName.toUpperCase();
var fullNameLowerCase = fullName.toLowerCase();
var fullNameCapitalize = fullName.substring(0,2);
var fullNameSplit = fullName.split("o");
console.log(fullNameSplit);
