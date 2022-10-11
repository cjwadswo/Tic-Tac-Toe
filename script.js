
//TODO: Implement gameBoard module
const gameBoard = (() =>{
    
    let board = [
        ['x', 'o', 'o'],
        ['x', 'x', 'x'],
        ['o', 'x', 'o']
    ];

    const _initializeDomBoard = () => {
        let array = [];
        for(let i = 0; i < 3; i++) {
            array[i] = [];
            for(let j = 0; j < 3; j++) {
                array[i][j] = document.querySelector(`.row${i} .col${j}`);
        }
       }
       return array;
    }

    let gameBoardContainer = _initializeDomBoard();

      //Display the board.
    const display = () => {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                gameBoardContainer[i][j].innerHTML = board[i][j];
            }
        }
    };
    display();
    //Update the board for 'x'

    //Update the board for 'o'

    //Determine winner
    return {
        display,
        gameBoardContainer
    }
})();
let test = gameBoard.gameBoardContainer;
console.log(gameBoard.gameBoardContainer);


function initializeDomGameBoard(){
    let domBoard = [];
    for(let i = 0; i < 3; i++) {
        domBoard[i] = [];
        for(let j = 0; j < 3; j++) {
            domBoard[i][j] = document.querySelector(`.row${i} .col${j}`);
    }
   }
}
initializeDomGameBoard();