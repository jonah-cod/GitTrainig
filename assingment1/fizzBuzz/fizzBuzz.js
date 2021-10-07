function fizzBuzz() {
    console.log('Hi');
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');

        if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else console.log(i);;

    }
}

fizzBuzz();