Typescript here

***

	function miniMaxSum(arr: number[]): void {  
	  // Sort the array in ascending order  
	  arr.sort((a, b) => a - b);  
  
      // Calculate minimum sum (sum of first four elements)  
	  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);  
  
      // Calculate maximum sum (sum of last four elements)  
	  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);  
  
      console.log(`${minSum} ${maxSum}`);  
  
	}

***