//1/

function findSqrt(n){
    return Math.root(n);
}

console.log(findSqrt(25));

//2/

function isEven(n){
    return n % 2;
};


console.log(isEven(25));

//3/

function randomSize(){
    var sizes = ['Small', 'Medium', 'Large'];
    var randSelect = Math.ceil(Math.random() * 3);
    return sizes[randSelect];
}

console.log(randomSize());
