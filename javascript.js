

const buttons = Array.from(document.querySelectorAll('.board > button'));
const board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

let [a, b, c, d, e, f, g, h, i] = board; 
let include = function chose(x){
    return board.includes(x);
}

function winner(){
    let player1 = 'you are the winner';
    let player2 = 'computer is the winner'; 
    let equal = 'it is a draw';
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
    }//else { 
       //return equal; 
    //}
}

function player1(x){
    console.log(x);
    console.log(include(x));
    console.log(typeof x);
//    if( board[x] == 'x' || board[x] == 'o'){return;}
   // else{
    board[x]= 'x';
    console.log(include(x));
    [a, b, c, d, e, f, g, h, i] = board; 
    document.getElementById(`item${x}`).textContent = 'x';
   // }
};
function playercomputer(){
    let ii = 0;
  //  let z ;
    do{
        z = Math.floor(Math.random() * board.length);
        ii++;
    } 
    while ( board[z] == 'x' || board[z] == 'o' && ii < 9);

    let y = z.toString();
    console.log(y);
    if ( include(y) == false){ return;}
    board[y] = 'o';
    console.log(y);
    [a, b, c, d, e, f, g, h, i] = board;
    function delay(){
        document.getElementById(`item${y}`).innerHTML = 'o';
    }    
    setTimeout(delay, 500);
}
buttons.forEach((button) => {
        button.addEventListener('click', () => {
        if (winner() != undefined) return;   
        let x = button.value;
        if ( board[x]  == 'x' || board[x]== 'o') return;
        console.log(x);
        player1(x);
        playercomputer();
     //   console.log(board);
     //   console.log(winner());
        document.getElementById('winner').textContent = winner();
    });
});

