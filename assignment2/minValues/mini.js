function miniValue(list) {

    let mini = Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof(list[i]) === "number") {
            if (list[i] < mini) {
                mini = list[i]
            }
        }
    }

    console.log(mini);
}

let list1 = ["1", 2, "1", 3, 4, "5", 'ad'];

let list2 = ['aa', 'ab', 'ac']

miniValue(list1);