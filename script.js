
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
        if(gameOver) return;
        
        let space = e.target;
        let rowIndex = space.className.split('-')[1][0];
        let colIndex = space.className.split('-')[1][1];
        if(space.textContent == '')
        {
            if(turn == 'x') {
                turn = 'o';
                space.textContent = 'x';
                board[rowIndex][colIndex] = 'x';
                
            }
            else {
                turn = 'x';
                space.textContent = 'o';
                board[rowIndex][colIndex] = 'o';
            }
        }

        
        _determineWinner();
    };
    
    //Determine winner
    const _determineWinner = () => {
        //Check if 3 in a row on each row
        if(!board[0].includes('') && !board[1].includes('') && !board[2].includes('')){
            gameOver = true;
            prompt('draw');
            return;
        }
        let winner = true;
        let str1 = '';
        let str2 = '';
        let str3 = '';
        let str4 = '';
        let str5 = '';
        let str6 = '';
        let str7 = '';
        let str8 = '';
        for (let i = 0; i < 3; i++) {
            str1 += board[0][i]; //first row
            str2 += board[1][i]; //second row
            str3 += board[2][i]; //third row

            str4 += board[i][0]; //first col
            str5 += board[i][1]; //second col
            str6 += board[i][2]; //third col

            str7 += board[i][i]; //principal diagonal
            str8 += board[i][2-i]; //secondary diagonal
        }
        // console.log(str8);
        if (str1 === 'xxx' ||
            str2 === 'xxx' ||
            str3 === 'xxx' ||
            str4 === 'xxx' ||
            str5 === 'xxx' ||
            str6 === 'xxx' ||
            str7 === 'xxx' ||
            str8 === 'xxx' ){
                gameOver = true;
                prompt('x');
            }
        else if(str1 === 'ooo' ||
                str2 === 'ooo' ||
                str3 === 'ooo' ||
                str4 === 'ooo' ||
                str5 === 'ooo' ||
                str6 === 'ooo' ||
                str7 === 'ooo' ||
                str8 === 'ooo' ) {
                   gameOver = true;
                   prompt('o');
        }
    }

    const prompt = (mark) => {
        const status = document.querySelector(".status");
        if(mark == 'draw') {
            status.textContent = "Draw!";
            return;
        }
        
        status.textContent = `${mark} Won!`;
    }
    //Setup
    const start = () => {
       _initializeDomBoard();
       _addGameBoardEventListeners();
    }

    let turn = 'x';
    let gameOver = false;
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let gameBoardContainer = _initializeDomBoard();
    return {
        start
    }
})();

gameBoard.start();


