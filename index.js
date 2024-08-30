const fs = require("fs")
var jwt = require('jsonwebtoken')

command = process.argv[2]

if (command == 'add'){
    work = process.argv[3];
    
    let data = fs.readFileSync('./data.json', 'utf-8');

    data = JSON.parse(data);

    var i = data[data.length-1].id + 1
    
    data.push({
        id: i,
        todo: work,
        done:false
    });
    
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8');
    console.log("New todo added with id ", i);
}
else if(command == "test"){
    console.log("testing")
}
else if(command == "list"){
    let data = fs.readFileSync('./data.json','utf-8');
    console.log(JSON.parse(data))
}
else if(command == "done"){
    todo_id = process.argv[3]
    let data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
    let d = data.find((data)=>data.id == todo_id)
    d.done = true
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8');
}
else if(command == "delete"){
    todo_id = process.argv[3]
    let data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
    data.splice(todo_id-1,1)
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8')
    console.log("todo deleted ")
}
else{
    console.log("Welcome to todo cli!!!")
    console.log("\"add <todo>\" to add a new todo")
    console.log("\"delete <id>\" to delete an existing todo")
    console.log("\"done <id>\" to mark a todo as done")
    console.log("\"list \" to list all todo")
}   




