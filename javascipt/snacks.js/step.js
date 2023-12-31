function range(start, end, step = 1) {
    const result = [];
  
    if (start < end && step > 0) {
      for (let i = start; i < end; i += step) {
        result.push(i);
      }
    } else if (start > end && step < 0) {
      for (let i = start; i > end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  console.log(range(1, 10, 2));  
  console.log(range(5, 2, -1));  
