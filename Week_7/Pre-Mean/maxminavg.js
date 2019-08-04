// // Given an array, find the max, min and avg

// function maxMinAvg(arr) {
//     var max = arr[0];
//     var min = arr[0];
//     var sum = 0;
    
//     for (var i = 0; i < arr.length; i++ ) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         else if (arr[i] > max) {
//             max = arr[i];
//         }

//         sum += arr[i];
//     }

//     var avg = sum / arr.length;
    
//     return("minimum is: " + min + " maximum is: " + max + " average is: " + avg);
// }

// console.log(maxMinAvg([1, -2, 9, 4]));

function max(arr){
    console.log(Math.min(...arr));
    return Math.max(...arr)
}

console.log(max([1,2,3]));