let arr = [2,1,4,5,2,1,4,"s40"]

console.log(arr.filter((value, index, self) =>{
    return self.indexOf(value) === index;
}));