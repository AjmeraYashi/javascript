function lookupStudent(studentID){

    var students=[
        {id : 14, name:"Yashi"},
        { id: 73, name:"Manan"},
        {id:24, name:"Yash"},
        {id:87, name:"Vipul"}
    ];

    return function greetStudent(greeting){

        var student = students.find(
            student =>student.id==studentID
        );
        return `${greeting},${student.name} !`;
    };
}

var chosenStudent=[
    lookupStudent(73),
    lookupStudent(87)
];

console.log(chosenStudent[0].name);
console.log(chosenStudent[0]("Hello"));
console.log(chosenStudent[1]("Howdy"));
