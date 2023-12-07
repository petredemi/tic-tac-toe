

const buttons = Array.from(document.querySelectorAll('.board > button'));
let board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
const restart = document.querySelector('#restart');
let equal = 0; // counts no rounds

let [a, b, c, d, e, f, g, h, i] = board; 
let include = function chose(x){
    return board.includes(x);
}

function winner(){
    let player1 = 'you are the winner';
    let player2 = 'computer is the winner';
    if (a == b && b == c){
        if( a == 'x'){
        return player1;
        }else{
            return player2;
        }
    }else if(d == e && e == f){
        if( d == 'x'){
            return player1;
            }else{
            return player2;
            }
    }else if(g == h && h == i){
        if( g == 'x'){
            return player1;
            }else{
            return player2;
            }
    
    }else if(a == d && d == g){
        if( a == 'x'){
            return player1;
            }else{
            return player2;
            }
    }else if(b == e && e == h){
        if( b == 'x'){
            return player1;
            }else{
            return player2;
            }

    }else if( c == f && f == i){
        if( c == 'x'){
            return player1;
            }else{
            return player2;
            }
    }else if( a == e && e == i){
        if( a == 'x'){
            return player1;
        }else {
            return player2;
            }
    }else if( c == e && e == g){
        if( c == 'x'){
            return player1;
            }else{
            return player2;
            }
    }
}

function player1(x){
    if( board[x] == 'x' || board[x] == 'o'){return;}
    else{
    board[x]= 'x';
    console.log(include(x));
    [a, b, c, d, e, f, g, h, i] = board; 
    document.getElementById(`item${x}`).textContent = 'x';
    }
};
function playercomputer(){
    let ii = 0;
    let z ;
    do{
        z = Math.floor(Math.random() * board.length);
        ii++;
    } 
    while ( board[z] == 'x' || board[z] == 'o' && ii < 9);
    let y = z.toString();
    if ( include(y) == false){ return;}
    board[y] = 'o';
    [a, b, c, d, e, f, g, h, i] = board;
    function delay(){
        document.getElementById(`item${y}`).innerHTML = 'o';
    }    
    setTimeout(delay, 600);
}
buttons.forEach((button) => {
        button.addEventListener('click', () => {
        if (winner() != undefined) return;   
        let x = button.value;
        if ( board[x]  == 'x' || board[x]== 'o') return;
        equal = equal + 1;
        player1(x);
        playercomputer();
        document.getElementById('winner').textContent = winner();
       if( equal == 5 && winner() == undefined){
            document.getElementById('winner').textContent = 'It is a draw';
        }
    });
});
buttons.forEach((button) =>{ //reset game
    restart.addEventListener('click', (e) => {
        board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
        [a, b, c, d, e, f, g, h, i] = board;
        document.getElementById('winner').textContent = '';
        button.textContent = '';
        equal = 0;
    });
});