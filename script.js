
//TODO: Implement gameBoard module
const gameBoard = (() =>{

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

    const _addGameBoardEventListeners = () => {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                gameBoardContainer[i][j].addEventListener('click', _updateGameBoard);
            }
        }
    };
    //Update the board for 'x' or ''o'
    const _updateGameBoard = (e) => {
        let space = e.target;
        if(space.textContent == '')
        {
            if(turn == 'x') {
                turn = 'o';
                space.textContent = 'x';
            }
            else {
                turn = 'x';
                space.textContent = 'o';
            }
            console.log(space.className);
        }
    };
    
    //Determine winner


    //Setup
    const start = () => {
        _initializeDomBoard();
        _addGameBoardEventListeners();
        // _display();
        
    }

    let turn = 'x';
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let gameBoardContainer = _initializeDomBoard();
    return {
        gameBoardContainer,
        start
    }
})();

const displayController = ( () => {

})();

gameBoard.start();