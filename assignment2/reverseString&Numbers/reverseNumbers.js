function reverseMof3() {
    const reversedMultiples = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            reversedMultiples.push(i);
        }

    }

    console.log(reversedMultiples.reverse());
}

reverseMof3();