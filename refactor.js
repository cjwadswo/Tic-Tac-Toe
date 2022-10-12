const gameBoard = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    
    const updateBoard = (mark, rowIndex, colIndex) => {
        board[rowIndex][colIndex] = mark;
    }
    const _determineWinner = () => {
        //Check if 3 in a row on each row
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
                console.log("x won");
            }
        else if(str1 === 'ooo' ||
                str2 === 'ooo' ||
                str3 === 'ooo' ||
                str4 === 'ooo' ||
                str5 === 'ooo' ||
                str6 === 'ooo' ||
                str7 === 'ooo' ||
                str8 === 'ooo' ) {
                    console.log("o won");
        }
    }
})();