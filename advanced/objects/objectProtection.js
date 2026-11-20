let nl = '\n';

// Prevents adding object properties
console.log('Object.preventExtensions(object):');
{
    const person = {
        firstName: "Black",
        lastName: "Hole",
    }
    console.log(person);
    person.city = "Bangladesh";
    Object.preventExtensions(person);
    const fruits = ["Apple", "Banana", "Water Melon"];
    Object.preventExtensions(fruits);

    console.log(person,nl);
}

// Returns true if properties can be added to an object
console.log('Object.isExtensible(object):');
{
    const person = {
        firstName: "Black",
        lastName: "Hole",
    }

    console.log(Object.isExtensible(person),nl);
}

// Prevents adding and deleting object properties
console.log('Object.seal(object):');
{
    const person = {
        firstName: "Black",
        lastName: "Hole",
    }
}

// Returns true if object is sealed
console.log('Object.isSealed(object):');
{
    const person = {
        firstName: "Black",
        lastName: "Hole",
    }
}

// Prevents any changes to an object
console.log('Object.freeze(object):');
{
    const person = {
        firstName: "Black",
        lastName: "Hole",
    }
}

// Returns true if object is frozen
console.log('Object.isFrozen(object):');
{
    const person = {
        firstName: "Black",
        lastName: "Hole",
    }
}