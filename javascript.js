document.getElementById('demo').innerHTML = 'hello world';
console.log('hello world');

//line1[0] = 'a';
//line1.push('asa');
//console.log(line1);
//console.log(line2[1]);
//const line1 = ['a', 'b', 'c'];
//const line2 = ['d', 'e', 'f'];
//const line3 = ['g', 'h', 'i'];
const board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
//let [a, b, c, d, e, f, g, h, i] = board; 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const include = function chose(x){
    return numbers.includes(x);
}
//let x;
let a = board[0];
let b = board[1];
let c = board[2];
let d = board[3];
let e = board[4];
let f = board[5];
let g = board[6];
let h = board[7];
let i = board[8];

function winner(){
    if (a == b && b == c){
        if( a == 'x'){
        return 'winner is Player1';
        }else{
            return 'winner is player2';
        }
    }else if(d == e && e == f){
        if( d == 'x'){
            return'winner is Player1';
            }else{
            return 'winner is player2';
            }
    }else if(g == h && h == i){
        if( g == 'x'){
            return 'winner is Player1';
            }else{
            return 'winner is player2';
            }
    }else if( a == e && e == i){
        if( a == 'x'){
            return 'winner is Player1';
        }else {
            return 'winner is player2';
            }
    }else if(g == e && e == c){
        if( a == 'x'){
            return 'winner is Player1';
            }else{
            console.log('winner is player2');
            }
    }else{ 
        return 'play further'; 
    }
}
function player1(x){
    if (include(x) === false){ return;}
    board[x]= 'x';
  /*  a = board[0];
    b = board[1];
    c = board[2];
    d = board[3];
    e = board[4];
    f = board[5];
    g = board[6];
    h = board[7];
    i = board[8];*/
    numbers.splice(x, 1);

    console.log(include(x));
    console.log(winner());
    document.getElementById(`item${x}`).textContent = 'x';

};
function playercomputer(){
    y = Math.floor(Math.random() * numbers.length);
    if ( include(y) == false){ return;}
    board[y] = 'o';
    document.getElementById(`item${y}`).innerHTML = 'y';
    numbers.splice(y, 1);
    console.log(numbers.length);
    console.log(y);
    console.log(numbers)

}

function player2(y){
    board[y]= 'o';
    a = board[0];
    b = board[1];
    c = board[2];
    d = board[3];
    e = board[4];
    f = board[5];
    g = board[6];
    h = board[7];
    i = board[8];
    console.log(winner());
  //  b = 'x';
  //  c = 'x';
};

//playercomputer();

player1(8);
playercomputer();
//player1(2);
//player1(0);
//player1(0);
//player1(1);
//player2(4);
//player2(5);

//console.log(winner());
console.log(board);
//console.log(numbers);
//console.log(include(2));