function calculateRoverPath(map) {
    'use strict';

let matricaArr = [
    [0, 2, 3, 4, 1],
    [2, 3, 4, 4, 1],
    [3, 4, 5, 6, 2],
    [4, 5, 6, 7, 1],
    [6, 7, 8, 7, 1]
];

let differenceX;
let differenceY;

let cordY = 0;
let cordX = 0;
let cordXPlOne = 1;
let cordYPlOne = 1;

while(cordX < 5 && cordY < matricaArr.length-1){
    if(matricaArr[cordY][cordX] >= matricaArr[cordY][cordXPlOne]){
        differenceX = matricaArr[cordY][cordX] - matricaArr[cordY][cordXPlOne];
    }else if(matricaArr[cordY][cordX] < matricaArr[cordY][cordXPlOne]){
        differenceX = matricaArr[cordY][cordXPlOne] - matricaArr[cordY][cordX];
    }else{
        cordY++;
        cordYPlOne++;
        --cordX;
    };

    if(matricaArr[cordY][cordX] >= matricaArr[cordYPlOne][cordX]){
        differenceY = matricaArr[cordY][cordX] - matricaArr[cordYPlOne][cordX];
    }else if(matricaArr[cordY][cordX] < matricaArr[cordYPlOne][cordX]){
        differenceY = matricaArr[cordYPlOne][cordX] - matricaArr[cordY][cordX];
    }else{
        cordX++;
        cordXPlOne++;
    };

    if(differenceX < differenceY || differenceX == differenceY || differenceX == 0 || cordY == matricaArr.length || cordYPlOne == matricaArr.length){     
        cordX++;
        cordXPlOne++;
        
    }else if(differenceX > differenceY || differenceY == 0 || matricaArr[cordY][cordX] == undefined){
        cordY++;
        cordYPlOne++;
    }
}
}


module.exports = {
    calculateRoverPath,
};
