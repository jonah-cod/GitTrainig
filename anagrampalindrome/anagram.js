function anagram(word1, word2 ) {
    let wordOne = word1.split("").sort().join("").toLowerCase()
    let wordTwo = word2.split("").sort().join("").toLowerCase()
    console.log(wordOne===wordTwo? (true): (false))
}

anagram('silent', 'listen')
