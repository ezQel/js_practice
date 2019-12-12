let size = 8;

function buildRow(firstVal, secVal, colNum){
    let row = '';
    for(let y = 0; y < colNum; y++){
        let col = '';
        if(y % 2 == 0){
            col = firstVal;
        }
        else{
            col = secVal;
        }
        row = row + col;
    }
    row = row + '\n';

    return row;
}

function chessBoard(_size){
    let board =''
    let pound = '#';
    let space = '  ';
    for(let x = 0; x < _size; x++){
        if(x % 2 == 0){
           board = board + buildRow(space, pound, _size);
        }
        else{
           board = board  + buildRow(pound, space, _size);
        }
    }    
    return board;
}

console.log(chessBoard(size));