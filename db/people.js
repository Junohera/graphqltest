export const people = [
    {   
        id: 0,
        name: "juno.choi",
        age: 24,
        gender: "male"
    },
    {   
        id: 1,
        name: "test",
        age: 23,
        gender: "female"
    },
    {   
        id: 2,
        name: "test22",
        age: 21,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};