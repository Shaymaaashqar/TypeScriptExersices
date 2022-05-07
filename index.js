"use strict";
exports.__esModule = true;
exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person) {
    return person.type === 'admin';
}
exports.isAdmin = isAdmin;
function isUser(person) {
    return person.type === 'user';
}
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person) && "role" in person) {
        additionalInformation = person.role;
    }
    if (isUser(person) && "occupation" in person) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
