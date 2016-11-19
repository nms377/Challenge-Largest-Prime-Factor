exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var factors = [];
  // do your work here

//Use modulus to find remainder of 0, if it returns 0 then increase primeNumber by 1 and push number into an array; if it doesn't then increase primeNumber by 1; this returns all factors not just prime
	if (n % primeNumber === 0){
		factors.push(primeNumber);
		primeNumber++;

	}else{
		primeNumber++;
	}
	  return primeNumber;
};

//Find factors of 600851475143	(used modulus)
	//Find prime factors	(used if statement)
		//Sort to find the largest prime factor (use array sort method)