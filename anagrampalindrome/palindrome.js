function palindrome(){
  let ispalindrome
  let word = "hanah"
  let i =0
  let y = word.length-1
  
  for(x=0; x<word.length; x++){
    
    if(word[i]===word[y]){
      ispalindrome = true
    }else{
      ispalindrome = false;
      break;
    }
    i++
    y--
    
  }
  console.log(ispalindrome)
}
palindrome();
