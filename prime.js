//part 3

function appendNum(n){
    let number = document.createElement('h4');
    number.innerHTML = n;
    document.body.appendChild(number);
    
}
                          
function primeNumbers(n){
    for(let i = 0; i <= n; i++){
        if(isPrime(i)){
            console.log(i);                    
        }
    }
    
}

function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i < Math.sqrt(n)+1; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}


export{primeNumbers, isPrime};



