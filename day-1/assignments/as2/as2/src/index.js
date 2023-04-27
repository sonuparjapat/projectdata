var obj = {
    title: "hello",
    status: false,
    id: 3
};
var getName = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    return "".concat(firstname, " ").concat(lastname ? lastname : "");
};
console.log(getName({ firstname: "sonu" }));
var question4 = {
    houseNumber: 4,
    street: "rawat",
    city: "ambala",
    state: "haryana",
    postalCode: 123,
    country: "india"
};
console.log(question4);
var persondetails = {
    Phone: [1, 2, 3],
    addresses: ["ambala city haryana"],
    email: "sjfsfjs",
    firstname: "sonu",
    lastname: "parjapat",
};
console.log(persondetails);
// Q5
var arr = [];
var PhoneBook = function (obj) {
    var x = arr.push(obj);
    return x;
};
console.log(PhoneBook({ Phone: [1, 2, 3], addresses: ["hello"], email: "fslfjs", firstname: "sfsjfs", lastname: "sfljs" }));
