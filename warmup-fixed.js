//1/

function findSqrt(n){
    return Math.sqrt(n);
}

console.log('5 should be ', findSqrt(25));

//2/

function isEven(n){
    return Boolean(!n % 2);
};


console.log('false should be ', isEven(25));

//3/

function randomSize(){
    var sizes = ['Small', 'Medium', 'Large'];
    var sample = [];
    var i = 0;

    while(1){
        var randSelect = Math.floor(Math.random() * 3);
        if(i > 9) break;
        sample.push(sizes[randSelect]);
        i++;
    }

    return sample;
}

console.log('sm, md, and lg :', randomSize());
