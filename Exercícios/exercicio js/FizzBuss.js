function divisivel(num){
    if (typeof num !== 'number') return num;
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 == 0 ) return 'Buzz'
    if(num % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
    return num
}

for (let i =0; i <=100; i++){
    console.log(i, divisivel(i))
}