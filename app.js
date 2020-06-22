


let myApp=() =>{
    
    let inputValue = document.getElementById('inputCheck').value
    let storage = document.createTextNode(inputValue)
    let myList = document.createElement('li')
    myList.appendChild(storage)
    document.getElementById('myTodo').appendChild(myList)
}
