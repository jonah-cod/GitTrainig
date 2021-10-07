function reverseString(string) {
    let stringArray = string.split(" ").reverse().join(" ");
    console.log(stringArray);
}

reverseString("Mike loves dogs")