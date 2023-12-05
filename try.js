document.getElementById('demo').innerHTML = 'hello world';
console.log('hello world');

//line1[0] = 'a';
//line1.push('asa');
//console.log(line1);
//console.log(line2[1]);
//const line1 = ['a', 'b', 'c'];
//const line2 = ['d', 'e', 'f'];
//const line3 = ['g', 'h', 'i'];
const buttons = Array.from(document.querySelectorAll('.board > button'));
const item0 = document.querySelector('#item0');
const item1 = document.querySelector('item1');

const item2 = document.querySelector('item2');

const board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
//let [a, b, c, d, e, f, g, h, i] = board; 
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
//const include = 
let include = function chose(x){
    return numbers.includes(x);
}
item1.value = 0;
console.log(item1.value);
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
            return 'winner is player2';
            }
    }else{ 
        return 'play further'; 
    }
}
function player1(){
   // chose(x);
    console.log(x);
    console.log(numbers);
    console.log(include(x));
    board[x]= 'x';
    numbers.splice(x, 1);
    a = board[0];
    b = board[1];
    c = board[2];
    d = board[3];
    e = board[4];
    f = board[5];
    g = board[6];
    h = board[7];
    i = board[8];
    console.log(numbers);
    console.log(winner());
    console.log(include(x));

    document.getElementById(`item${x}`).textContent = 'x';
    


};
function playercomputer(){
    y = Math.floor(Math.random() * numbers.length);
   // chose(y);
    let include = chose(y);
    console.log(typeof y);
    console.log(y);
    if ( include == false){ return;}
   console.log(include(y));

    board[y] = 'o';

    document.getElementById(`item${y}`).innerHTML = 'o';
    numbers.splice(y, 1);
    console.log(y);
    console.log(numbers);
    console.log(winner());
    console.log(include(y));
}
buttons.forEach((button) => {
        button.addEventListener('click', () => {
        x = button.value;
        player1();
        console.log(board);
       // playercomputer();
    });
});

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
};
//player1(1);
//playercomputer();

//player1(x);
//playercomputer();
//player1(2);
//player1(0);
//player1(0);
//player1(1);
//player2(4);
//player2(5);


/*
function player1(x){
      //  x = button.value;
      chose(x);
    console.log(include(x));

    //if (include === false){ return;}
    board[x]= 'x';
    a = board[0];
    b = board[1];
    c = board[2];
    d = board[3];
    e = board[4];
    f = board[5];
    g = board[6];
    h = board[7];
    i = board[8];
    numbers.splice(x, 1);

    console.log(include(x));
    console.log(winner());
    document.getElementById(`item${x}`).textContent = 'x';

}
player1(0)
*/