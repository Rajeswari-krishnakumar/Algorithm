var arr = [20,3,9,45,6];
var middle,l1,l2;
function mergeSort(left, right){
	if(left >= right){
		return
	}
	middle = Math.floor((left + right)/2);
	console.log("middle",middle);
	mergeSort(left,middle);
	mergeSort(middle+1,right);
	return merge(left,middle,middle+1,right);
}

function merge(left1,right1,left2,right2){
	let c = [],ccount = 0;
	let i=left1,j=left2;
	console.log(left1,right1,left2,right2,arr);
	while(i<=right1 && j<=right2){
		if(arr[i]<= arr[j]){
			c[ccount] = arr[i];
			ccount++;i++;
		}else{
			c[ccount] = arr[j];
			ccount++;j++;
		}
	}
	// console.log(c);
	while(i<=right1){
		c[ccount] = arr[i];
		ccount++;i++;
	}
	while(j<=right2){
		c[ccount] = arr[j];
		ccount++;j++;
	}
	console.log(c);
	console.log("array",arr);
	ccount=0;
	for(i=left1;i<=right2;i++){
		arr[i]=c[ccount];
		ccount++;
	}
	console.log("array",arr);
	return c;
}
console.log(mergeSort(0,arr.length-1));