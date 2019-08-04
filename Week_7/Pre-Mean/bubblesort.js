// Bubble Sort

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for ( var j = 1; j < array.length; j++) {
            if (array[j] < array[j-1]) {
                swap(array, j-1, j);
            }
        }
    }

    return array;
}


console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))


// Time Complexity:

// 1. 
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// Time Complexity: O(n)



// 2.
function findNth(arr, n){
    console.log(arr[n]);
}
// Time Complexity: O(1)



//3. 
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
// Time Complexity: O(1)



//4. 
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// Time Complexity: O(n^2)