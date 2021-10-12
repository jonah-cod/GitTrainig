function giveMeASolution(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+" && i > 1) {
            newArray.push((newArray[(newArray.length) - 1]) + newArray[(newArray.length - 2)]);
        } else if (arr[i] == "D" && i > 1) {
            newArray.push(newArray[(newArray.length) - 1] * newArray[(newArray.length) - 2])
        } else if (arr[i] == "C" && i > 1) {
            newArray.pop()
        } else if (typeof(arr[i]) == "number") {
            newArray.push(arr[i]);
        } else {
            console.log("input a valid array");
        }
    }

    console.log(newArray.reduce((sum, item) => {
        return (sum += item)
    }), 0);
}

const arra = [10, 9, "+", "D", "C", "+"]

giveMeASolution(arra);