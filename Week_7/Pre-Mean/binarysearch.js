// binary search

// function binarySearch(inputArray, searchValue) {
//     var minIndex = 0,
//         maxIndex = inputArray.length - 1,
//         currentIndex,
//         currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = (minIndex + maxIndex) / 2 | 0;
//         currentElement = inputArray[currentIndex];

//         if (currentElement < searchValue)
//             minIndex = currentIndex + 1;
//         else if (currentElement > searchValue)
//             maxIndex = currentIndex - 1;
//         else
//             return currentIndex;
//     }

//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
// console.log(binarySearch([1, 2, 3, 4, 5, 5, 5, 6, 66], 6))

// Time complexity: O(log(n))


function getMidPoint(arr, num) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;

    if (arr[midPoint] > num) {

        var newArr = arr.slice(0, midPoint);
        return getMidPoint(newArr, num);

    } else if (arr[midPoint] < num) {

        var newArr = arr.slice(midPoint + 1, arr.length);
        return getMidPoint(newArr, num);

    } else {
        if (arr[midPoint] == num) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log(getMidPoint([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
console.log(getMidPoint([1, 2, 3, 4, 5, 5, 5, 6, 66], 68))