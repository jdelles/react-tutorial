import React from "react";
import Person from "./Person";

function NameList() {
    const names = ["Bruce", "Clark", "Diana", "Bruce"];
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
    return <div>{nameList}</div>;

    // const persons = [
    //     {
    //         id: 1,
    //         name: "James",
    //         age: 39,
    //         skill: "React",
    //     },
    //     {
    //         id: 2,
    //         name: "James Old Man",
    //         age: 339,
    //         skill: "Full Stack Dev",
    //     },
    //     {
    //         id: 3,
    //         name: "James Immortal",
    //         age: 3399,
    //         skill: "All The Skills",
    //     },
    // ];

    // const personsList = persons.map((person) => (
    //     <Person key={person.id} person={person} />
    // ));

    // return <div>{personsList}</div>;

    // const names = ["Bruce", "Clark", "Diana"];
    // const nameList = names.map((name) => <h2>{name}</h2>);
    // return <div>{nameList}</div>;

    // return (
    //     <div>
    //         <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //     </div>
    // );
}
const names = ["Bruce", "Clark", "Diana"];

export default NameList;
