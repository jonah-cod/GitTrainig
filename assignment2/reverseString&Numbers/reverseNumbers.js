function reverseMof3() {
    const reversedMultiples = [];
    for (let i = 100; i > 1; i--) {
        if (i % 3 === 0) {
            reversedMultiples.push(i);
        }

    }

    console.log(reversedMultiples);
}

reverseMof3();
