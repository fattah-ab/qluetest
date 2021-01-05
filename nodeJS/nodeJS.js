function getPrimes(n) {

    let m = [];
    nextPrime:
    for (let i = 2; i < n; i++) { 
   
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) {
          continue nextPrime;
        } // not a prime, go next i
      }
      m.push(i);
    }
    return m;
  }
  console.log(getPrimes( 5 )); 
  console.log(getPrimes( 10 ));