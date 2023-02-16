//API: Application Programming Interface
let squares = document.getElementById('square')
console.log(squares)

const board= document.getElementById('board')
console.log(board)


//this is called an arrow function
let handleClick = () =>{
    //this is where commands will sit
    console.log("clicked!")
}

// alt method, this is an older, yet still valid method of setting variables
// function handleClick(){
//     //this is where commands go
//     console.log('clicked')
// }

board.addEventListener('click', handleClick)

