/*This is to get the pivot element such that all the element to 
the left of pivot element is smaller than pivot and all the element to the right 
of pivot is greater than pivot. For that forst choose pivot to be last element, 
0 as left and right-1 as right pointers, just check the condition and keep moving while
condition is satified and swap left and right array element.
End --> swap left and pivot array element and return left pointer as pivot*/
var arr = [2,5,7,1,0,10,3];
var pivot;
function getPivot(left, right){
	pivot = arr[right]; //choose the last elemet of the array as pivot element
	pivotIndex = right;
	right = right -1;
	while(true){
		while(arr[left]<=pivot){
			left = left+1
		}
		while(arr[right]>pivot && right > 0){
			right = right -1;
		}
		if(left<= right){
			// swap left and right array element
			[arr[left],arr[right]]=[arr[right],arr[left]]
		}else{
			break;
		}
	}
	// swap left and pivot array element
	[arr[left],arr[pivotIndex]]=[arr[pivotIndex],arr[left]]
	return left; 
}
//Keep dividing using pivot --> where it will get sorted while finding pivot
function quickSort(left, right){
	if(left>=right){
		return;
	}
	pivot = getPivot(left,right);
	quickSort(left, pivot-1);
	quickSort(pivot+1,right);
	return;
}
quickSort(0,arr.length -1);
console.log(arr);