function fibonacci(n){
	if(n==0){
		return 0;
	}if(n==1){
		return 1
	}
	let prev = 1;
	let prevP = 0;
	let i =2;let fib;
	for(i=2;i<=n;i++){
		fib = prev + prevP;
		prevP = prev;
		prev = fib;
	}
	return fib;
}
console.log(fibonacci(8));