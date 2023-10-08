function isEven(n) {

    while (n > 1) {
        n -= 2;
      }
    if (n == 0) {
      return "is even";
    } else if (n == 1) {
      return "is odd";
    } else {
      return isEven(n - 2);
    }
  }
  
//   console.log(isEven(50));  
  console.log(isEven(75));  
//   console.log(isEven(-1));   